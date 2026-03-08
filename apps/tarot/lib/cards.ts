import type { TarotCard } from "./types";

const majorArcana: TarotCard[] = [
  { name: "The Fool", arcana: "major", keywords: ["beginnings", "innocence", "spontaneity", "free spirit"] },
  { name: "The Magician", arcana: "major", keywords: ["manifestation", "resourcefulness", "power", "inspired action"] },
  { name: "The High Priestess", arcana: "major", keywords: ["intuition", "sacred knowledge", "divine feminine", "subconscious"] },
  { name: "The Empress", arcana: "major", keywords: ["femininity", "beauty", "nature", "nurturing", "abundance"] },
  { name: "The Emperor", arcana: "major", keywords: ["authority", "establishment", "structure", "father figure"] },
  { name: "The Hierophant", arcana: "major", keywords: ["spiritual wisdom", "tradition", "conformity", "education"] },
  { name: "The Lovers", arcana: "major", keywords: ["love", "harmony", "relationships", "values alignment"] },
  { name: "The Chariot", arcana: "major", keywords: ["control", "willpower", "success", "determination"] },
  { name: "Strength", arcana: "major", keywords: ["courage", "patience", "compassion", "inner strength"] },
  { name: "The Hermit", arcana: "major", keywords: ["soul-searching", "introspection", "solitude", "inner guidance"] },
  { name: "Wheel of Fortune", arcana: "major", keywords: ["good luck", "karma", "life cycles", "destiny"] },
  { name: "Justice", arcana: "major", keywords: ["fairness", "truth", "cause and effect", "law"] },
  { name: "The Hanged Man", arcana: "major", keywords: ["pause", "surrender", "letting go", "new perspectives"] },
  { name: "Death", arcana: "major", keywords: ["endings", "change", "transformation", "transition"] },
  { name: "Temperance", arcana: "major", keywords: ["balance", "moderation", "patience", "purpose"] },
  { name: "The Devil", arcana: "major", keywords: ["shadow self", "attachment", "addiction", "restriction"] },
  { name: "The Tower", arcana: "major", keywords: ["sudden change", "upheaval", "chaos", "revelation"] },
  { name: "The Star", arcana: "major", keywords: ["hope", "faith", "purpose", "renewal", "spirituality"] },
  { name: "The Moon", arcana: "major", keywords: ["illusion", "fear", "anxiety", "subconscious", "intuition"] },
  { name: "The Sun", arcana: "major", keywords: ["positivity", "fun", "warmth", "success", "vitality"] },
  { name: "Judgement", arcana: "major", keywords: ["judgement", "rebirth", "inner calling", "absolution"] },
  { name: "The World", arcana: "major", keywords: ["completion", "integration", "accomplishment", "travel"] },
];

const suits: Array<{ suit: TarotCard["suit"]; cards: Array<{ name: string; keywords: string[] }> }> = [
  {
    suit: "wands",
    cards: [
      { name: "Ace of Wands", keywords: ["inspiration", "new opportunities", "growth", "potential"] },
      { name: "Two of Wands", keywords: ["future planning", "progress", "decisions", "discovery"] },
      { name: "Three of Wands", keywords: ["progress", "expansion", "foresight", "overseas"] },
      { name: "Four of Wands", keywords: ["celebration", "joy", "harmony", "relaxation"] },
      { name: "Five of Wands", keywords: ["disagreements", "competition", "tension", "conflict"] },
      { name: "Six of Wands", keywords: ["success", "public recognition", "progress", "self-confidence"] },
      { name: "Seven of Wands", keywords: ["challenge", "competition", "protection", "perseverance"] },
      { name: "Eight of Wands", keywords: ["speed", "action", "air travel", "movement"] },
      { name: "Nine of Wands", keywords: ["resilience", "courage", "persistence", "last stand"] },
      { name: "Ten of Wands", keywords: ["burden", "extra responsibility", "hard work", "completion"] },
      { name: "Page of Wands", keywords: ["enthusiasm", "exploration", "discovery", "free spirit"] },
      { name: "Knight of Wands", keywords: ["energy", "passion", "adventure", "impulsiveness"] },
      { name: "Queen of Wands", keywords: ["courage", "confidence", "independence", "social butterfly"] },
      { name: "King of Wands", keywords: ["natural leader", "vision", "entrepreneur", "honour"] },
    ],
  },
  {
    suit: "cups",
    cards: [
      { name: "Ace of Cups", keywords: ["love", "new feelings", "emotional awakening", "creativity"] },
      { name: "Two of Cups", keywords: ["unified love", "partnership", "mutual attraction"] },
      { name: "Three of Cups", keywords: ["celebration", "friendship", "creativity", "community"] },
      { name: "Four of Cups", keywords: ["meditation", "contemplation", "apathy", "reevaluation"] },
      { name: "Five of Cups", keywords: ["regret", "failure", "disappointment", "pessimism"] },
      { name: "Six of Cups", keywords: ["revisiting the past", "childhood memories", "innocence"] },
      { name: "Seven of Cups", keywords: ["opportunities", "choices", "wishful thinking", "illusion"] },
      { name: "Eight of Cups", keywords: ["disappointment", "abandonment", "withdrawal", "escapism"] },
      { name: "Nine of Cups", keywords: ["contentment", "satisfaction", "gratitude", "wish come true"] },
      { name: "Ten of Cups", keywords: ["divine love", "blissful relationships", "harmony", "alignment"] },
      { name: "Page of Cups", keywords: ["creative opportunities", "intuitive messages", "curiosity"] },
      { name: "Knight of Cups", keywords: ["creativity", "romance", "charm", "imagination"] },
      { name: "Queen of Cups", keywords: ["compassion", "calm", "comfort", "intuition"] },
      { name: "King of Cups", keywords: ["emotionally balanced", "compassionate", "diplomatic"] },
    ],
  },
  {
    suit: "swords",
    cards: [
      { name: "Ace of Swords", keywords: ["breakthrough", "clarity", "sharp mind", "truth"] },
      { name: "Two of Swords", keywords: ["difficult decisions", "weighing options", "stalemate"] },
      { name: "Three of Swords", keywords: ["heartbreak", "emotional pain", "sorrow", "grief"] },
      { name: "Four of Swords", keywords: ["rest", "relaxation", "meditation", "contemplation"] },
      { name: "Five of Swords", keywords: ["conflict", "disagreements", "competition", "defeat"] },
      { name: "Six of Swords", keywords: ["transition", "change", "rite of passage", "releasing baggage"] },
      { name: "Seven of Swords", keywords: ["betrayal", "deception", "getting away with something"] },
      { name: "Eight of Swords", keywords: ["imprisonment", "entrapment", "self-victimization"] },
      { name: "Nine of Swords", keywords: ["anxiety", "worry", "fear", "depression", "nightmares"] },
      { name: "Ten of Swords", keywords: ["painful endings", "deep wounds", "betrayal", "loss"] },
      { name: "Page of Swords", keywords: ["new ideas", "curiosity", "thirst for knowledge"] },
      { name: "Knight of Swords", keywords: ["ambition", "action", "drive", "perfectionism"] },
      { name: "Queen of Swords", keywords: ["independent", "unbiased judgement", "clear boundaries"] },
      { name: "King of Swords", keywords: ["mental clarity", "intellectual power", "authority", "truth"] },
    ],
  },
  {
    suit: "pentacles",
    cards: [
      { name: "Ace of Pentacles", keywords: ["new financial opportunity", "prosperity", "abundance"] },
      { name: "Two of Pentacles", keywords: ["multiple priorities", "time management", "adaptability"] },
      { name: "Three of Pentacles", keywords: ["teamwork", "collaboration", "learning", "implementation"] },
      { name: "Four of Pentacles", keywords: ["saving money", "security", "conservatism", "scarcity"] },
      { name: "Five of Pentacles", keywords: ["financial loss", "poverty", "lack mindset", "isolation"] },
      { name: "Six of Pentacles", keywords: ["giving", "receiving", "sharing wealth", "generosity"] },
      { name: "Seven of Pentacles", keywords: ["long-term view", "sustainable results", "perseverance"] },
      { name: "Eight of Pentacles", keywords: ["apprenticeship", "repetitive tasks", "mastery", "skill"] },
      { name: "Nine of Pentacles", keywords: ["abundance", "luxury", "self-sufficiency", "financial security"] },
      { name: "Ten of Pentacles", keywords: ["wealth", "financial security", "family", "long-term success"] },
      { name: "Page of Pentacles", keywords: ["manifestation", "financial opportunity", "skill development"] },
      { name: "Knight of Pentacles", keywords: ["hard work", "productivity", "routine", "conservatism"] },
      { name: "Queen of Pentacles", keywords: ["nurturing", "practical", "providing financially", "working parent"] },
      { name: "King of Pentacles", keywords: ["wealth", "business", "leadership", "security", "discipline"] },
    ],
  },
];

const minorArcana: TarotCard[] = suits.flatMap(({ suit, cards }) =>
  cards.map((card, i) => ({
    ...card,
    arcana: "minor" as const,
    suit,
    number: i + 1,
  }))
);

export const deck: TarotCard[] = [...majorArcana, ...minorArcana];

export function drawThreeCards(): { card: TarotCard; reversed: boolean }[] {
  const shuffled = [...deck].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3).map((card) => ({
    card,
    reversed: Math.random() < 0.3,
  }));
}
