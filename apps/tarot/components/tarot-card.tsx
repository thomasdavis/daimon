"use client";

import type { TarotCard } from "../lib/types";
import styles from "./tarot-card.module.css";

interface TarotCardProps {
  card?: TarotCard;
  reversed?: boolean;
  revealed: boolean;
  position: "past" | "present" | "future";
  onClick?: () => void;
  delay?: number;
}

const suitSymbols: Record<string, string> = {
  wands: "🪄",
  cups: "🏆",
  swords: "⚔️",
  pentacles: "⭐",
};

export function TarotCardComponent({
  card,
  reversed,
  revealed,
  position,
  onClick,
  delay = 0,
}: TarotCardProps) {
  const positionLabels = { past: "Past", present: "Present", future: "Future" };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.positionLabel}>{positionLabels[position]}</div>
      <div
        className={`${styles.card} ${revealed ? styles.revealed : ""}`}
        style={{ animationDelay: `${delay}ms` }}
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        <div className={styles.cardInner}>
          <div className={styles.cardBack}>
            <div className={styles.cardBackDesign}>
              <div className={styles.star}>✦</div>
              <div className={styles.cardBackLabel}>TAROT</div>
            </div>
          </div>
          <div className={styles.cardFront}>
            {card && (
              <>
                <div className={styles.cardArcana}>
                  {card.arcana === "major"
                    ? "✧ Major Arcana ✧"
                    : `${suitSymbols[card.suit!]} ${card.suit}`}
                </div>
                <div
                  className={`${styles.cardName} ${reversed ? styles.reversed : ""}`}
                >
                  {card.name}
                </div>
                {reversed && (
                  <div className={styles.reversedBadge}>Reversed</div>
                )}
                <div className={styles.keywords}>
                  {card.keywords.slice(0, 3).join(" · ")}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
