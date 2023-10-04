import {
  CardAnimalType,
  GameCard,
  GameInitParams,
  GameLevel,
  GameState,
} from "@interfaces/index";
import {computed, signal} from "@preact/signals";
import {gameMenuService} from "./game-menu.service";
import {GameStatisticService} from "@services/game-statistic.service";
import {GameLevelService} from "@services/game-level.service";

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

  private timer: number;
  private readonly startTimestamp = signal<number | null>(null);
  private readonly currentTimestamp = signal<number | null>(null);

  constructor(private gameStatisticService: GameStatisticService, private gameLevelService: GameLevelService) {
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
    if (state === "run") {
      this.resetTimer();
      this.startTimer();
      gameMenuService.showMenu();

      this.openCardsIds.value = [];
      this.cardsFlipCount.value = 0;
      const { horizontalCardsCount, pairsCount } = gameDifficultyMap.get(
        this.gameLevelService.gameLevel.value
      );
      this.cards.value = this.createGameCards(pairsCount);
      this.horizontalCardsCount.value = horizontalCardsCount;
      this.verticalCardsCount.value =
        this.cards.value.length / horizontalCardsCount;
    }

    if (state === "game_over") {
      this.stopTimer();
      gameMenuService.hideMenu();
      this.gameStatisticService.addGameStatistic({
        timeSpentInSeconds: this.timeSpentInSeconds.value,
        cardFlipsCount: this.cardsFlipCount.value,
      });
    }

    this.currentState.value = state;
  }

  private formatTime(value: number): string {
    const format = (value: number) => value.toString().padStart(2, "0");

    const spentSeconds = Math.floor(value / 1000);
    let minutesText = format(Math.floor(spentSeconds / 60));
    minutesText = minutesText.length > 2 ? "99" : minutesText;
    const secondsText = format(spentSeconds % 60);

    return `${minutesText}:${secondsText}`;
  }
}

function getRandomIntInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
