import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, ChevronDown, Loader2, MessageCircle, Send, X } from "lucide-react";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ChatResponse = {
  status: boolean;
  statuscode: number;
  text?: {
    user_id?: string;
    query?: string;
    answer?: string;
    history?: ChatMessage[];
  };
};

const CHAT_API_URL = "/api/chat";
const CHAT_HISTORY_URL = "/api/chat/history";
const CHAT_USER_ID_KEY = "rcs-chat-user-id";

const welcomeMessage: ChatMessage = {
  role: "assistant",
  content: "Hi! Welcome to RCS Delivery. How can I assist you today?",
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(() => localStorage.getItem(CHAT_USER_ID_KEY) || "");
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isHistoryLoading, setIsHistoryLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen || !userId) return;

    const loadHistory = async () => {
      setIsHistoryLoading(true);
      setError("");

      try {
        const response = await fetch(`${CHAT_HISTORY_URL}?user_id=${encodeURIComponent(userId)}`, {
          headers: { accept: "application/json" },
        });
        const data: ChatResponse = await response.json();

        if (!response.ok || !data.status) {
          throw new Error("Could not load previous messages.");
        }

        const history = data.text?.history;
        if (history?.length) {
          setMessages(history);
        }
      } catch (historyError) {
        setError(historyError instanceof Error ? historyError.message : "Could not load previous messages.");
      } finally {
        setIsHistoryLoading(false);
      }
    };

    loadHistory();
  }, [isOpen, userId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isHistoryLoading]);

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = input.trim();
    if (!query || isLoading) return;

    setInput("");
    setError("");
    setIsLoading(true);
    setMessages((currentMessages) => [...currentMessages, { role: "user", content: query }]);

    try {
      const body = new URLSearchParams();
      body.set("user_id", userId);
      body.set("query", query);

      const response = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });
      const data: ChatResponse = await response.json();

      if (!response.ok || !data.status || !data.text?.answer) {
        throw new Error("The assistant could not reply right now.");
      }

      if (data.text.user_id) {
        setUserId(data.text.user_id);
        localStorage.setItem(CHAT_USER_ID_KEY, data.text.user_id);
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: data.text?.answer || "Thanks for your message. Our team will help you shortly.",
        },
      ]);
    } catch (chatError) {
      setError(chatError instanceof Error ? chatError.message : "Something went wrong. Please try again.");
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: "Sorry, I could not connect right now. You can still call us anytime at 888-786-0080.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#6dbb0f] text-white shadow-[0_16px_40px_rgba(109,187,15,0.35)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6dbb0f] focus-visible:ring-offset-2"
        aria-label="Open chat"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    );
  }

  return (
    <section className="fixed bottom-4 right-4 z-50 flex h-[min(620px,calc(100vh-2rem))] w-[calc(100vw-2rem)] max-w-[360px] flex-col overflow-hidden rounded-t-2xl rounded-b-md border border-black/10 bg-white text-slate-900 shadow-[0_24px_70px_rgba(15,23,42,0.28)] sm:bottom-5 sm:right-5">
      <header className="flex h-14 items-center gap-3 bg-[#6dbb0f] px-4 text-white">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="rounded-full p-1.5 transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Minimize chat"
        >
          <ChevronDown className="h-5 w-5 rotate-90" />
        </button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
          <Bot className="h-5 w-5 text-[#6dbb0f]" />
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-base font-semibold leading-none">Natalie</h2>
          <p className="mt-1 text-xs text-white/85">RCS Delivery assistant</p>
        </div>

        {/* <button
          type="button"
          className="rounded-full p-1.5 transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Chat menu"
        >
          <Menu className="h-5 w-5" />
        </button> */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="rounded-full p-1.5 transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Close chat"
        >
          <X className="h-4 w-4" />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto bg-white px-4 py-5">
        {isHistoryLoading ? (
          <div className="flex items-center justify-center gap-2 py-10 text-sm text-slate-500">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading your chat
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => {
              const isUser = message.role === "user";

              return (
                <div key={`${message.role}-${index}-${message.content}`} className={`flex gap-2 ${isUser ? "justify-end" : "justify-start"}`}>
                  {!isUser && (
                    <div className="mt-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100">
                      <Bot className="h-5 w-5 text-slate-500" />
                    </div>
                  )}

                  <div className={`max-w-[78%] ${isUser ? "items-end" : "items-start"}`}>
                    {!isUser && <p className="mb-1 text-xs font-medium text-slate-500">Natalie</p>}
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                        isUser
                          ? "rounded-br-md bg-[#6dbb0f] text-white"
                          : "rounded-bl-md bg-slate-100 text-slate-800"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex gap-2">
                <div className="mt-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100">
                  <Bot className="h-5 w-5 text-slate-500" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium text-slate-500">Natalie</p>
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-slate-100 px-3.5 py-3 text-slate-500">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:120ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:240ms]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="border-t border-slate-100 bg-white px-4 py-3">
        <div className="mb-3 flex items-center justify-center gap-1 text-[11px] text-slate-400">
          <span className="text-[#6dbb0f]">✽</span>
          Powered by RCS Delivery
        </div>

        {error && <p className="mb-2 rounded-md bg-red-50 px-3 py-2 text-xs text-red-600">{error}</p>}

        <form onSubmit={sendMessage} className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type here and press enter..."
            className="min-w-0 flex-1 rounded-full border border-transparent bg-slate-50 px-3 py-2 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#6dbb0f]/40 focus:bg-white"
          />
          {/* <button type="button" className="hidden rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100 sm:inline-flex" aria-label="Like">
            <ThumbsUp className="h-4 w-4" />
          </button>
          <button type="button" className="hidden rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100 sm:inline-flex" aria-label="Attach file">
            <Paperclip className="h-4 w-4" />
          </button>
          <button type="button" className="hidden rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100 sm:inline-flex" aria-label="Emoji">
            <Smile className="h-4 w-4" />
          </button> */}
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6dbb0f] text-white transition-colors hover:bg-[#5da10d] disabled:cursor-not-allowed disabled:bg-slate-300"
            aria-label="Send message"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChatBot;
