export interface GameField {
  cards: GameFieldCard[];
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
  | "bear";
