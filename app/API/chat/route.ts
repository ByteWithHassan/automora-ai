import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, sessionId, leadData } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message field is required." },
        { status: 400 }
      );
    }

    const n8nWebhookUrl = process.env.N8N_CHAT_WEBHOOK_URL;

    // Fallback response if n8n webhook URL environment variable is not configured yet
    if (!n8nWebhookUrl) {
      return NextResponse.json({
        output:
          "Thank you for contacting Automora Flow! Our n8n integration endpoint is currently being configured. You can also reach our team directly via WhatsApp or our contact form above.",
        fallback: true,
      });
    }

    // Proxy request to the configured n8n Chat Trigger / Webhook
    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "sendMessage",
        sessionId: sessionId || "session_default",
        chatInput: message,
        leadData: leadData || null,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook responded with status ${response.status}`);
    }

    const data = await response.json();

    // Support standard n8n output formats (output key, text key, or direct array)
    const replyText =
      data.output ||
      data.text ||
      data.message ||
      (Array.isArray(data) && data[0]?.output) ||
      "I have received your message. How else can I assist your automation setup today?";

    return NextResponse.json({ output: replyText });
  } catch (error: unknown) {
    console.error("n8n Chat Proxy Error:", error);
    return NextResponse.json(
      {
        output:
          "We encountered a temporary connection issue reaching the automation server. Please try clicking 'Retry' or send a message via our WhatsApp channel.",
        error: true,
      },
      { status: 500 }
    );
  }
}