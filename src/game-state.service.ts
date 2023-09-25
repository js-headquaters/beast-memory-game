import { computed, signal } from "@preact/signals";
import { GameField, GameFieldCard, GameState } from "./types";

const cards = ["A", "B", "C", "D", "E", "F", "G", "H"];

export class GameStateService {
  readonly gameField = signal<GameField>({ cards: [] });
  readonly gameState = signal<GameState>("init");

  readonly openCards = signal<GameFieldCard[]>([]);

  readonly isCardMatched = computed(
    () => this.openCards.value[0].value === this.openCards.value[1].value
  );

  start() {
    this.gameField.value = this.createGameField();
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

  private createGameField(): GameField {
    const gameFieldCards: GameFieldCard[] = this.shuffleArray([
      ...cards,
      ...cards,
    ]).map((card) => ({ value: card, isActive: true }));

    const gameField: GameField = { cards: gameFieldCards };

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
