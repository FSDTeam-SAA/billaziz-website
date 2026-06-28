const CHAT_API_BASE_URL =
  process.env.VITE_CHAT_API_BASE_URL || "http://187.77.187.56:8010/api";

const sendJson = (res, status, data) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return sendJson(res, 405, {
      status: false,
      statuscode: 405,
      message: "Method not allowed",
    });
  }

  const userId = typeof req.query.user_id === "string" ? req.query.user_id : "";
  const searchParams = new URLSearchParams();
  if (userId) searchParams.set("user_id", userId);

  try {
    const response = await fetch(
      `${CHAT_API_BASE_URL}/chat/history/?${searchParams.toString()}`,
      {
        headers: {
          accept: "application/json",
        },
        redirect: "follow",
      },
    );

    const text = await response.text();
    res.statusCode = response.status;
    res.setHeader(
      "Content-Type",
      response.headers.get("content-type") || "application/json",
    );
    res.end(text);
  } catch (error) {
    return sendJson(res, 502, {
      status: false,
      statuscode: 502,
      message:
        error instanceof Error
          ? error.message
          : "Failed to connect to chat history service",
    });
  }
}
