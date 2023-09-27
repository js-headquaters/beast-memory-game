import { computed, signal } from "@preact/signals";
import { CardType, GameField, GameFieldCard, GameState } from "./types";
import { createContext } from "preact";

const animalCards: CardType[] = [
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

export class GameStateService {
  readonly gameField = signal<GameField>({
    cards: [],
    horizontalCardsCount: 0,
    verticalCardsCount: 0,
  });
  readonly gameState = signal<GameState>("init");

  readonly openCards = signal<GameFieldCard[]>([]);

  readonly isCardMatched = computed(
    () => this.openCards.value[0].value === this.openCards.value[1].value
  );

  start(horizontalCardsCount: number, verticalCardsCount: number) {
    debugger;
    this.gameField.value = this.createGameField(
      horizontalCardsCount,
      verticalCardsCount
    );
    this.gameState.value = "run";
  }

  openCard(card: GameFieldCard) {
    if (
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
  }

  isCardOpen(card: GameFieldCard): boolean {
    return this.openCards.value.includes(card);
  }

  private closeCards(removeFromField = false) {
    setTimeout(() => {
      if (removeFromField) {
        this.openCards.value[0].isActive = false;
        this.openCards.value[1].isActive = false;
      }
      this.openCards.value = [];
    }, 1000);
  }

  private createGameField(
    horizontalCardsCount: number,
    verticalCardsCount: number
  ): GameField {
    const totalCardCount = horizontalCardsCount * verticalCardsCount;
    const usedAnimalsCards = animalCards.slice(
      0,
      Math.floor(totalCardCount / 2)
    );

    const gameFieldCards: GameFieldCard[] = this.shuffleArray([
      ...usedAnimalsCards,
      ...usedAnimalsCards,
    ]).map((card) => ({ value: card, isActive: true }));

    const gameField: GameField = {
      cards: gameFieldCards,
      verticalCardsCount,
      horizontalCardsCount,
    };

    return gameField;
  }

  private shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

export const GameStateContext = createContext<GameStateService>(null);
