import {
  CardAnimalType,
  GameCard,
  GameInitParams,
  GameLevel,
  GameState,
} from "@interfaces/index";
import { computed, effect, signal } from "@preact/signals";
import { getMainButton } from "@utils/telegram.utils";
import { MAX_GAME_LEVEL } from "@constants";

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
  readonly gameLevel = signal<GameLevel>(1);

  readonly cards = signal<GameCard[]>([]);
  readonly horizontalCardsCount = signal<number>(0);
  readonly verticalCardsCount = signal<number>(0);
  readonly currentState = signal<GameState>("init");
  readonly openCardsIds = signal<GameCard["id"][]>([]);
  readonly cardsFlipCount = signal<number>(0);

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

    return diff > 0 ? Math.floor(diff / 1000) : 0;
  });

  readonly canIncreaseLevel = computed(() => {
    return this.gameLevel.value < MAX_GAME_LEVEL;
  });

  readonly canDegreesLevel = computed(() => {
    return this.gameLevel.value > 1;
  });

  readonly isMenuOpen = computed(() => {
    return this.currentState.value === "menu";
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

  constructor() {
    this.mainButton.show();
    this.mainButton.onClick(this.mainButtonClickHandler);
    effect(() => {
      this.mainButton.setText(this.menuButtonText.value);
    });
  }

  start = () => {
    this.setState("init");
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
    this.cardsFlipCount.value += 1;

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
    }, 1000);
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
    }
  };

  degreesLevel = () => {
    const value = (this.gameLevel.value - 1) as GameLevel;
    if (value > 0) {
      this.gameLevel.value = value;
    }
  };

  mainButtonClickHandler = () => {
    if (this.currentState.value === "game_over") {
      this.increaseLevel();
      this.start();
      return;
    }

    if (this.currentState.value !== "menu") {
      this.setState("menu");
    } else {
      this.setState("run");
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

        window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy");

        if (this.cards.value.every((card) => !card.isActive)) {
          window.Telegram.WebApp.HapticFeedback.notificationOccurred("success");
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

  private setState(state: GameState) {
    if (state === "init") {
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

    if (state === "run") {
      this.startTimer();
    }

    if (state === "menu") {
      this.stopTimer();
    }

    if (state === "game_over") {
      this.stopTimer();
    }

    this.currentState.value = state;
  }
}
