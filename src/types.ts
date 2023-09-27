export interface GameField {
  cards: GameFieldCard[];
  horizontalCardsCount: number;
  verticalCardsCount: number;
}

export interface GameFieldCard {
  value: CardType;
  isActive: boolean;
}

export type GameState = "init" | "run" | "game_over";

export type CardType =
  | "dog"
  | "cat"
  | "chicken"
  | "pig"
  | "monkey"
  | "horse"
  | "donkey"
  | "bear"
  | "frog"
  | "lion"
  | "wolf"
  | "turtle"
  | "bee"
  | "wasp"
  | "crab"
  | "dolphin";
