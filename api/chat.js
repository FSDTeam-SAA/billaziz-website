const CHAT_API_BASE_URL =
  process.env.VITE_CHAT_API_BASE_URL || "http://187.77.187.56:8010/api";

const sendJson = (res, status, data) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
};

const readBody = async (req) => {
  if (typeof req.body === "string") return req.body;

  if (req.body && typeof req.body === "object") {
    return new URLSearchParams(req.body).toString();
  }

  const chunks = [];

  for await (const chunk of req) {
    chunks.push(Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString("utf8");
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, {
      status: false,
      statuscode: 405,
      message: "Method not allowed",
    });
  }

  try {
    const body = await readBody(req);

    const response = await fetch(`${CHAT_API_BASE_URL}/chat`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
      redirect: "follow",
    });

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
          : "Failed to connect to chat service",
    });
  }
}
