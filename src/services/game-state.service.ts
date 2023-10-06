import {
  CARD_FLIP_ANIMATION_TIME,
  MAX_GAME_LEVEL,
  MILLISECONDS_IN_SECOND,
} from "@constants";
import {
  CardAnimalType,
  GameCard,
  GameInitParams,
  GameLevel,
  GameState,
} from "@interfaces/index";
import { computed, effect, signal } from "@preact/signals";
import { Logger } from "@utils/logger.utils";
import { getHapticFeedback, getMainButton } from "@utils/telegram.utils";

const animalCardTypes: CardAnimalType[] = [
  "bear",
  "owl",
  "cat",
  "chicken",
  "dog",
  "fox",
  "hedgehog",
  "lion",
  "monkey",
  "duck",
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
  readonly gameLevel = signal<GameLevel>(1);
  readonly cards = signal<GameCard[]>([]);
  readonly horizontalCardsCount = signal<number>(0);
  readonly verticalCardsCount = signal<number>(0);
  readonly currentState = signal<GameState>("init");
  readonly openCardsIds = signal<GameCard["id"][]>([]);
  readonly cardsFlipCount = signal<number>(0);
  readonly showDebugInfo = signal<boolean>(false);

  readonly cardsMap = computed(() =>
    this.cards.value.reduce((acc, card) => {
      acc.set(card.id, card);

      return acc;
    }, new Map<GameCard["id"], GameCard>())
  );

  readonly timeSpentInSeconds = computed<number>(() => {
    const start = this.startTimestamp.value;
    const current = this.currentTimestamp.value;
    const diff = current - start;

    return diff > 0 ? Math.floor(diff / MILLISECONDS_IN_SECOND) : 0;
  });

  readonly canIncreaseLevel = computed(() => {
    return this.gameLevel.value < MAX_GAME_LEVEL;
  });

  readonly canDegreesLevel = computed(() => {
    return this.gameLevel.value > 1;
  });

  readonly menuButtonText = computed(() => {
    if (this.currentState.value === "game_over") {
      return this.canIncreaseLevel.value ? "Next level" : "Play again";
    }
    return this.currentState.value === "menu" ? "Close" : "Statistic";
  });

  private timer: number;
  private readonly startTimestamp = signal<number | null>(null);
  private readonly currentTimestamp = signal<number | null>(null);

  private readonly mainButton = getMainButton();
  private readonly logger = new Logger("GameStateService");
  private readonly feedback = getHapticFeedback();

  constructor() {
    this.mainButton.show();
    this.mainButton.onClick(this.mainButtonClickHandler);

    effect(() => {
      this.mainButton.setText(this.menuButtonText.value);
    });

    effect(() => {
      const state = this.currentState.value;
      this.logger.log(`game state changed to "${state}"`);

      if (state === "init") {
        this.initGame();
        this.currentState.value = "run";
        return;
      }

      if (state === "run") {
        this.startTimer();
        return;
      }

      if (state === "menu" || state === "game_over") {
        this.stopTimer();
        return;
      }
    });
  }

  restart = () => {
    this.currentState.value = "init";
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
    this.cardsFlipCount.value += 1;

    this.logger.log(`opened "${card.animalType}" card`);

    if (this.openCardsIds.value.length < 2) {
      return;
    }

    this.closeCards();
  };

  isCardOpen = (card: GameCard): boolean => {
    return this.openCardsIds.value.includes(card.id);
  };

  startTimer = () => {
    this.timer = setInterval(() => {
      this.currentTimestamp.value = Date.now();
    }, MILLISECONDS_IN_SECOND);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.startTimestamp.value = Date.now();
  };

  increaseLevel = () => {
    const value = (this.gameLevel.value + 1) as GameLevel;
    if (value <= MAX_GAME_LEVEL) {
      this.gameLevel.value = value;
      this.initGame();
    }
  };

  degreesLevel = () => {
    const value = (this.gameLevel.value - 1) as GameLevel;
    if (value > 0) {
      this.gameLevel.value = value;
      this.initGame();
    }
  };

  mainButtonClickHandler = () => {
    if (this.currentState.value === "game_over") {
      this.increaseLevel();
      this.restart();
      return;
    }

    if (this.currentState.value !== "menu") {
      this.currentState.value = "menu";
    } else {
      this.currentState.value = "run";
    }
  };

  toggleShowDebugInfo = () => {
    this.showDebugInfo.value = !this.showDebugInfo.value;
  };

  private closeCards() {
    const cardsMap = this.cardsMap.value;
    const openCardsIds = this.openCardsIds.value;
    const firstCard = cardsMap.get(openCardsIds[0]);
    const secondCard = cardsMap.get(openCardsIds[1]);

    const isCardMatched = firstCard.animalType === secondCard.animalType;

    // Wait till flip animation ends
    setTimeout(() => {
      this.openCardsIds.value = [];

      if (!isCardMatched) {
        this.logger.log(
          `card "${firstCard.animalType}" do not match card "${secondCard.animalType}"`
        );

        return;
      }

      this.logger.log(
        `card "${firstCard.animalType}" match card "${secondCard.animalType}"`
      );

      this.feedback.impactOccurred("heavy");

      firstCard.isActive = false;
      secondCard.isActive = false;
      this.cards.value = [...this.cards.value];

      const hasActiveCards = this.cards.value.some((card) => card.isActive);

      if (hasActiveCards) {
        return;
      }

      // Wait till card flip animation ends
      setTimeout(() => {
        this.feedback.notificationOccurred("success");
        this.currentState.value = "game_over";
      }, CARD_FLIP_ANIMATION_TIME);
    }, CARD_FLIP_ANIMATION_TIME);
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
    const arrayClone = [...array];
    for (let i = arrayClone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayClone[i], arrayClone[j]] = [arrayClone[j], arrayClone[i]];
    }
    return arrayClone;
  }

  private getRandomAnimalTypes(count: number): CardAnimalType[] {
    return this.getShuffledArray(animalCardTypes).slice(0, count);
  }

  private initGame() {
    this.resetTimer();
    this.openCardsIds.value = [];
    this.cardsFlipCount.value = 0;
    const { horizontalCardsCount, pairsCount } = gameDifficultyMap.get(
      this.gameLevel.value
    );
    this.cards.value = this.createGameCards(pairsCount);
    this.horizontalCardsCount.value = horizontalCardsCount;
    this.verticalCardsCount.value =
      this.cards.value.length / horizontalCardsCount;
  }
}
