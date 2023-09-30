export interface GameCard {
  id: `${CardAnimalType}-${number}`;
  animalType: CardAnimalType;
  isActive: boolean;
}

export interface GameInitParams {
  pairsCount: number;
  horizontalCardsCount: number;
}

export type GameState = "init" | "run" | "game_over";

export type CardAnimalType =
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
  | "crab"
  | "dolphin";

export type GameLevel = 1 | 2 | 3 | 4 | 5 | 6;
