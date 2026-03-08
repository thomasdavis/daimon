"use client";

import styles from "./reading-display.module.css";

interface ReadingDisplayProps {
  text: string;
  streaming: boolean;
}

export function ReadingDisplay({ text, streaming }: ReadingDisplayProps) {
  if (!text && !streaming) return null;

  return (
    <div className={styles.reading}>
      <h2 className={styles.title}>✧ Your Reading ✧</h2>
      <div className={styles.text}>
        {text}
        {streaming && <span className={styles.cursor}>▊</span>}
      </div>
    </div>
  );
}
