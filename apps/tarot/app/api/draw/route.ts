import { drawThreeCards } from "../../../lib/cards";
import type { DrawnCard } from "../../../lib/types";

export async function POST() {
  const drawn = drawThreeCards();
  const positions: DrawnCard["position"][] = ["past", "present", "future"];

  const cards: DrawnCard[] = drawn.map((d, i) => ({
    card: d.card,
    position: positions[i]!,
    reversed: d.reversed,
  }));

  const id = crypto.randomUUID();

  return Response.json({ id, cards });
}
