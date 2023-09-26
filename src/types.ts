export interface GameField {
  cards: GameFieldCard[];
}

export interface GameFieldCard {
  value: string;
  isActive: boolean;
}

export type GameState = "init" | "run" | "game_over";
