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
  "bear",
  "bee",
  "cat",
  "chicken",
  "dog",
  "frog",
  "hedgehog",
  "lion",
  "monkey",
  "mouse",
  "panda",
  "pig",
  "rabbit",
  "sheep",
  "turtle",
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
  readonly openCardsIds = signal<GameCard["id"][]>([]);
  readonly gameLevel = signal<GameLevel>(1);

  readonly cardsMap = computed(() => {
    return this.cards.value.reduce((acc, card) => {
      acc.set(card.id, card);

      return acc;
    }, new Map<GameCard["id"], GameCard>());
  });

  readonly isAllCardInactive = computed(() => {
    if (this.currentState.value !== "run") {
      return false;
    }
    return this.cards.value.every((card) => !card.isActive);
  });

  readonly timeSpent = computed<string | null>(() => {
    const format = (value: number) => value.toString().padStart(2, "0");

    const start = this.startTimestamp.value;
    const current = this.currentTimestamp.value;

    if (!start || !current || current - start < 0) {
      return null;
    }

    const spentSeconds = Math.floor((current - start) / 1000);
    const minutes = format(Math.floor(spentSeconds / 60));
    const seconds = format(spentSeconds % 60);

    return `${minutes}:${seconds}`;
  });

  private readonly startTimestamp = signal<number | null>(null);
  private readonly currentTimestamp = signal<number | null>(null);
  private timer: number;

  constructor() {
    effect(() => {
      if (this.isAllCardInactive.value) {
        this.currentState.value = "game_over";
      }
    });

    effect(() => {
      if (this.currentState.value === "game_over") {
        alert(`Very Impressive! time spent: ${this.timeSpent.value}`);
        this.stopTimer();
        setTimeout(() => {
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
    this.startTimer();
  };

  openCard = (card: GameCard) => {
    if (
      this.currentState.value !== "run" ||
      !card.isActive ||
      this.openCardsIds.value.length >= 2 ||
      this.isCardOpen(card)
    ) {
      return;
    }

    this.openCardsIds.value = [...this.openCardsIds.value, card.id];

    if (this.openCardsIds.value.length < 2) {
      return;
    }

    this.closeCards();
  };

  isCardOpen = (card: GameCard): boolean => {
    return this.openCardsIds.value.includes(card.id);
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

  private closeCards() {
    const cardsMap = this.cardsMap.value;
    const openCardsIds = this.openCardsIds.value;
    const firstCard = cardsMap.get(openCardsIds[0]);
    const secondCard = cardsMap.get(openCardsIds[1]);

    const isCardMatched = firstCard.animalType === secondCard.animalType;

    setTimeout(() => {
      if (isCardMatched) {
        firstCard.isActive = false;
        secondCard.isActive = false;

        this.cards.value = [...this.cards.value];
      }
      this.openCardsIds.value = [];
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

    const animalTypes = this.getRandomAnimalTypes(pairsCount);

    const firstAnimalCards = animalTypes.map((type) => createCard(type, 1));
    const secondAnimalCards = animalTypes.map((type) => createCard(type, 2));

    const gameCards: GameCard[] = this.getShuffledArray([
      ...firstAnimalCards,
      ...secondAnimalCards,
    ]);

    return gameCards;
  }

  private getShuffledArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private resetState() {
    this.openCardsIds.value = [];
    this.currentState.value = "init";
    this.cards.value = [];
  }

  private startTimer() {
    this.startTimestamp.value = Date.now();
    this.timer = setInterval(() => {
      this.currentTimestamp.value = Date.now();
    }, 1000);
  }

  private stopTimer() {
    clearInterval(this.timer);
  }

  private getRandomAnimalTypes(count: number): CardAnimalType[] {
    return this.getShuffledArray([...animalCardTypes]).slice(0, count);
  }
}

export const GameStateContext = createContext<GameStateService>(null);
