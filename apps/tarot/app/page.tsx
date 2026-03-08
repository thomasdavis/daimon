"use client";

import { useState, useCallback } from "react";
import { TarotCardComponent } from "../components/tarot-card";
import { ReadingDisplay } from "../components/reading-display";
import type { DrawnCard, Reading } from "../lib/types";
import styles from "./page.module.css";

export default function Home() {
  const [cards, setCards] = useState<DrawnCard[]>([]);
  const [readingId, setReadingId] = useState<string>("");
  const [interpretation, setInterpretation] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [phase, setPhase] = useState<"idle" | "drawn" | "reading">("idle");

  const drawCards = useCallback(async () => {
    setCards([]);
    setInterpretation("");
    setRevealed(false);
    setPhase("idle");

    const res = await fetch("/api/draw", { method: "POST" });
    const data = (await res.json()) as { id: string; cards: DrawnCard[] };
    setCards(data.cards);
    setReadingId(data.id);
    setPhase("drawn");
  }, []);

  const revealAndInterpret = useCallback(async () => {
    setRevealed(true);
    setPhase("reading");
    setStreaming(true);
    setInterpretation("");

    const res = await fetch("/api/interpret", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cards }),
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    let full = "";

    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        full += chunk;
        setInterpretation(full);
      }
    }

    setStreaming(false);

    // Save to localStorage
    const reading: Reading = {
      id: readingId,
      cards,
      interpretation: full,
      model: "gpt-4o",
      createdAt: new Date().toISOString(),
    };
    const history: Reading[] = JSON.parse(
      localStorage.getItem("tarot-history") || "[]"
    );
    history.unshift(reading);
    localStorage.setItem("tarot-history", JSON.stringify(history.slice(0, 50)));
  }, [cards, readingId]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>✦ Tarot ✦</h1>
        <p className={styles.subtitle}>
          Three-card spread · Past · Present · Future
        </p>
      </header>

      <main className={styles.main}>
        {phase === "idle" && (
          <button className={styles.drawButton} onClick={drawCards}>
            Draw Cards
          </button>
        )}

        {cards.length > 0 && (
          <>
            <div className={styles.spread}>
              {cards.map((c, i) => (
                <TarotCardComponent
                  key={`${c.card.name}-${c.position}`}
                  card={c.card}
                  reversed={c.reversed}
                  revealed={revealed}
                  position={c.position}
                  delay={i * 200}
                />
              ))}
            </div>

            {phase === "drawn" && (
              <button
                className={styles.revealButton}
                onClick={revealAndInterpret}
              >
                Reveal & Read
              </button>
            )}
          </>
        )}

        <ReadingDisplay text={interpretation} streaming={streaming} />

        {phase === "reading" && !streaming && (
          <div className={styles.actions}>
            <button className={styles.drawButton} onClick={drawCards}>
              Draw Again
            </button>
            <a href="/history" className={styles.historyLink}>
              View History
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
