import OpenAI from "openai";
import type { DrawnCard } from "../../../lib/types";

export async function POST(request: Request) {
  const client = new OpenAI();
  const { cards } = (await request.json()) as { cards: DrawnCard[] };

  const spread = cards
    .map((c) => {
      const orientation = c.reversed ? " (Reversed)" : "";
      return `${c.position.toUpperCase()}: ${c.card.name}${orientation} — keywords: ${c.card.keywords.join(", ")}`;
    })
    .join("\n");

  const stream = await client.chat.completions.create({
    model: "gpt-4o",
    max_tokens: 1024,
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "You are a mystical tarot reader. Interpret spreads with poetic, insightful language. Be specific to the cards drawn and their positions. If a card is reversed, incorporate that meaning. Keep readings to 3-4 paragraphs. Give the reading directly — no preamble.",
      },
      {
        role: "user",
        content: spread,
      },
    ],
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content;
        if (text) {
          controller.enqueue(encoder.encode(text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
