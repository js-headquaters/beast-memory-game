import {
  CardAnimalType,
  GameCard,
  GameInitParams,
  GameLevel,
  GameState,
} from "@interfaces/index";
import { computed, signal } from "@preact/signals";

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
  readonly verticalCardsCount = signal<number>(0);

  readonly currentState = signal<GameState>("init");
  readonly openCardsIds = signal<GameCard["id"][]>([]);
  readonly gameLevel = signal<GameLevel>(1);

  readonly cardsMap = computed(() => {
    return this.cards.value.reduce((acc, card) => {
      acc.set(card.id, card);

      return acc;
    }, new Map<GameCard["id"], GameCard>());
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
    this.start();
  }

  start = () => {
    this.setState("run");
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

        if (this.cards.value.every((card) => !card.isActive)) {
          this.setState("game_over");
        } else {
          this.cards.value = [...this.cards.value];
        }
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

  private setState(state: GameState) {
    if (state === "run") {
      this.openCardsIds.value = [];

      const { horizontalCardsCount, pairsCount } = gameDifficultyMap.get(
        this.gameLevel.value
      );
      this.cards.value = this.createGameCards(pairsCount);
      this.horizontalCardsCount.value = horizontalCardsCount;
      this.verticalCardsCount.value =
        this.cards.value.length / horizontalCardsCount;
      this.startTimer();
    }

    if (state === "game_over") {
      this.stopTimer();
    }

    this.currentState.value = state;
  }
}

export const gameStateService = new GameStateService();
