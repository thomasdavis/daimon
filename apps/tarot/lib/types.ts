export interface TarotCard {
  name: string;
  arcana: "major" | "minor";
  suit?: "wands" | "cups" | "swords" | "pentacles";
  number?: number;
  keywords: string[];
}

export interface DrawnCard {
  card: TarotCard;
  position: "past" | "present" | "future";
  reversed: boolean;
}

export interface Reading {
  id: string;
  cards: DrawnCard[];
  interpretation: string;
  model: string;
  createdAt: string;
}
