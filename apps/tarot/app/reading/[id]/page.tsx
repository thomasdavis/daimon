"use client";

import { useState, useEffect, use } from "react";
import { TarotCardComponent } from "../../../components/tarot-card";
import { ReadingDisplay } from "../../../components/reading-display";
import type { Reading } from "../../../lib/types";
import styles from "./page.module.css";

export default function ReadingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [reading, setReading] = useState<Reading | null>(null);

  useEffect(() => {
    const history: Reading[] = JSON.parse(
      localStorage.getItem("tarot-history") || "[]"
    );
    const found = history.find((r) => r.id === id);
    setReading(found || null);
  }, [id]);

  if (!reading) {
    return (
      <div className={styles.page}>
        <p className={styles.notFound}>
          Reading not found. <a href="/">Draw new cards.</a>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="/" className={styles.back}>
          &larr; Back
        </a>
        <span className={styles.date}>
          {new Date(reading.createdAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })}
        </span>
      </header>

      <div className={styles.spread}>
        {reading.cards.map((c) => (
          <TarotCardComponent
            key={c.position}
            card={c.card}
            reversed={c.reversed}
            revealed={true}
            position={c.position}
          />
        ))}
      </div>

      <ReadingDisplay text={reading.interpretation} streaming={false} />
    </div>
  );
}
