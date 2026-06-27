import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

type FaqItem = {
  _id: string;
  question: string;
  answer: string;
  status: string;
};

type FaqResponse = {
  data?: FaqItem[];
};

const backendBaseUrl =
  ((import.meta.env as ImportMetaEnv & { VITE_BACKEND_URL?: string }).VITE_BACKEND_URL ||
    "http://localhost:5001/api/v1").replace(/\/$/, "");

const FAQSection = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadFaqs = async () => {
      try {
        const response = await fetch(
          `${backendBaseUrl}/faqs?sortBy=createdAt&limit=10&page=1`,
          {
            headers: { accept: "*/*" },
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }

        const result: FaqResponse = await response.json();
        const activeFaqs =
          result.data?.filter((faq) => faq.status?.toLowerCase() === "active") ||
          [];

        setFaqs(activeFaqs);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        console.error("FAQ fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFaqs();

    return () => controller.abort();
  }, []);

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
          <div>
            <span className="label-text mb-3 block">FAQ</span>
            <h2 className="heading-section mb-4">
              Common <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Can't find what you're looking for? Our team is available 24/7 to help.
            </p>
            <a href="tel:8887860080" className="inline-flex items-center gap-2 h-12 px-6 bg-accent text-accent-foreground rounded-xl font-bold hover:bg-accent/90 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="tabular-nums">888-786-0080</span>
            </a>
          </div>

          <div>
            {isLoading && (
              <p className="text-sm text-muted-foreground mb-4">
                Loading FAQs...
              </p>
            )}

            {!isLoading && faqs.length === 0 && (
              <p className="text-sm text-muted-foreground mb-4">
                No FAQs available right now.
              </p>
            )}

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq._id}
                  value={`faq-${i}`}
                  className="card-surface px-6 border rounded-xl"
                >
                  <AccordionTrigger className="text-sm font-bold text-foreground hover:no-underline hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
