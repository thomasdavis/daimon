"use client";

import { useState, useEffect } from "react";
import type { Reading } from "../../lib/types";
import styles from "./page.module.css";

export default function History() {
  const [readings, setReadings] = useState<Reading[]>([]);

  useEffect(() => {
    const history: Reading[] = JSON.parse(
      localStorage.getItem("tarot-history") || "[]"
    );
    setReadings(history);
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="/" className={styles.back}>
          &larr; Back
        </a>
        <h1 className={styles.title}>Reading History</h1>
      </header>

      {readings.length === 0 ? (
        <p className={styles.empty}>
          No readings yet. <a href="/">Draw your first cards.</a>
        </p>
      ) : (
        <div className={styles.list}>
          {readings.map((r) => (
            <div key={r.id} className={styles.entry}>
              <div className={styles.meta}>
                <span className={styles.date}>
                  {new Date(r.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </span>
                <span className={styles.model}>{r.model}</span>
              </div>
              <div className={styles.cards}>
                {r.cards.map((c) => (
                  <span key={c.position} className={styles.cardBadge}>
                    {c.card.name}
                    {c.reversed ? " ↓" : ""}
                  </span>
                ))}
              </div>
              <p className={styles.interpretation}>
                {r.interpretation.slice(0, 200)}...
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
