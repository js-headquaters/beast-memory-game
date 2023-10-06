export interface GameCard {
  id: `${CardAnimalType}-${number}`;
  animalType: CardAnimalType;
  isActive: boolean;
}

export interface GameInitParams {
  pairsCount: number;
  horizontalCardsCount: number;
}

export type GameState = "init" | "run" | "game_over" | "menu";

export type CardAnimalType =
  | "dog"
  | "cat"
  | "chicken"
  | "pig"
  | "monkey"
  | "bear"
  | "fox"
  | "lion"
  | "turtle"
  | "duck"
  | "panda"
  | "sheep"
  | "hedgehog"
  | "owl"
  | "rabbit";

export type GameLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface GameStatistic {
  timeSpentInSeconds: number;
  cardFlipsCount: number;
}

export type GameStatisticMap = Record<GameLevel, GameStatistic[]>;

export type Theme = "light" | "dark";

export interface ThemeProperties {
  themeBackground: string;
  themeModalBackground: string;
  themeButtonBackground: string;
  themeButtonTextColor: string;
  themeTextMainColor: string;
  themeTextHighlightColor: string;
  themeShadowColor: string;
  themeBorderColor: string;
}
