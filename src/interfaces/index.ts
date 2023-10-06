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
  | "frog"
  | "lion"
  | "turtle"
  | "bee"
  | "panda"
  | "sheep"
  | "hedgehog"
  | "mouse"
  | "rabbit";

export type GameLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface Time {
  seconds: number;
  minutes: number;
  hours: number;
}

export interface GameStatistic {
  timeSpentInSeconds: number;
  cardFlipsCount: number;
}

export type GameStatisticWithLevel = Record<GameLevel, GameStatistic[]>;

export type GameTheme = "light" | "dark";

export interface GameThemeProperties {
  themeBackground: string;
  themeModalBackground: string;
  themeButtonBackground: string;
  themeButtonTextColor: string;
  themeTextMainColor: string;
  themeTextHighlightColor: string;
  themeShadowColor: string;
  themeBorderColor: string;
}
