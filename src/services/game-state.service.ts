import {
  CardAnimalType,
  GameLevel,
  GameCard,
  GameState,
  GameInitParams,
} from "@interfaces/index";
import { computed, effect, signal } from "@preact/signals";
import { createContext } from "preact";

const animalCardTypes: CardAnimalType[] = [
  "cat",
  "dog",
  "bear",
  "chicken",
  "donkey",
  "horse",
  "monkey",
  "pig",
  "frog",
  "lion",
  "wolf",
  "turtle",
  "bee",
  "wasp",
  "crab",
  "dolphin",
];

const gameDifficultyMap = new Map<GameLevel, GameInitParams>([
  [1, { horizontalCardsCount: 3, pairsCount: 3 }],
  [2, { horizontalCardsCount: 4, pairsCount: 6 }],
  [3, { horizontalCardsCount: 4, pairsCount: 8 }],
  [4, { horizontalCardsCount: 4, pairsCount: 10 }],
  [5, { horizontalCardsCount: 4, pairsCount: 12 }],
  [6, { horizontalCardsCount: 5, pairsCount: 15 }],
]);

export class GameStateService {
  readonly maxDifficulty: GameLevel = 6;

  readonly cards = signal<GameCard[]>([]);
  readonly horizontalCardsCount = signal<number>(0);
  readonly currentState = signal<GameState>("init");
  readonly openCards = signal<GameCard[]>([]);
  readonly gameLevel = signal<GameLevel>(1);

  readonly cardsMap = computed(() => {
    return this.cards.value.reduce((acc, card) => {
      acc.set(card.id, card);

      return acc;
    }, new Map());
  });

  readonly isCardMatched = computed(
    () =>
      this.openCards.value[0].animalType === this.openCards.value[1].animalType
  );

  readonly isAllCardInactive = computed(() => {
    if (this.cards.value.length === 0) {
      return false;
    }
    return this.cards.value.every((card) => !card.isActive);
  });

  constructor() {
    effect(() => {
      if (this.isAllCardInactive.value) {
        this.currentState.value = "game_over";

        setTimeout(() => {
          alert("OMG! Very Impressive");
          this.increaseLevel();
          this.start();
        }, 500);
      }
    });
  }

  start = () => {
    this.resetState();
    const { horizontalCardsCount, pairsCount } = gameDifficultyMap.get(
      this.gameLevel.value
    );
    this.cards.value = this.createGameCards(pairsCount);
    this.horizontalCardsCount.value = horizontalCardsCount;
    this.currentState.value = "run";
  };

  openCard = (card: GameCard) => {
    if (
      this.currentState.value !== "run" ||
      !card.isActive ||
      this.openCards.value.length >= 2 ||
      this.isCardOpen(card)
    ) {
      return;
    }

    this.openCards.value = [...this.openCards.value, card];

    if (this.openCards.value.length < 2) {
      return;
    }

    this.closeCards(this.isCardMatched.value);
  };

  isCardOpen = (card: GameCard): boolean => {
    return this.openCards.value.includes(card);
  };

  increaseLevel = () => {
    const value = (this.gameLevel.value + 1) as GameLevel;
    if (value <= this.maxDifficulty) {
      this.gameLevel.value = value;
    }
  };

  degreesLevel = () => {
    const value = (this.gameLevel.value - 1) as GameLevel;
    if (value > 0) {
      this.gameLevel.value = value;
    }
  };

  private closeCards(removeFromField = false) {
    setTimeout(() => {
      if (removeFromField) {
        const cardsMap = this.cardsMap.value;
        const openCards = this.openCards.value;
        const firstCard = cardsMap.get(openCards[0].id);
        const secondCard = cardsMap.get(openCards[1].id);

        firstCard.isActive = false;
        secondCard.isActive = false;

        this.cards.value = [...this.cards.value];
      }
      this.openCards.value = [];
    }, 1000);
  }

  private createGameCards(pairsCount: number): GameCard[] {
    const createCard = (
      animalType: CardAnimalType,
      idSuffix: number
    ): GameCard => {
      return {
        animalType,
        isActive: true,
        id: `${animalType}-${idSuffix}`,
      };
    };

    const firstAnimalCards = animalCardTypes
      .slice(0, pairsCount)
      .map((type) => createCard(type, 1));
    const secondAnimalCards = animalCardTypes
      .slice(0, pairsCount)
      .map((type) => createCard(type, 2));

    const gameCards: GameCard[] = this.shuffleArray([
      ...firstAnimalCards,
      ...secondAnimalCards,
    ]);

    return gameCards;
  }

  private shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private resetState() {
    this.openCards.value = [];
    this.currentState.value = "run";
    this.cards.value = [];
  }
}

export const GameStateContext = createContext<GameStateService>(null);
