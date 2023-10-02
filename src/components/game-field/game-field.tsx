import { GameCardComponent } from "@components/game-card/game-card";
import { gameStateService } from "@services/game-state.service";
import "./game-field.css";

export function GameFieldComponent() {
  const { cards, horizontalCardsCount } = gameStateService;

  const style = `--horizontal-cards-count: ${horizontalCardsCount.value};`;

  return (
    <div style={style} class="game-field">
      {cards.value.map((card) => {
        return <GameCardComponent {...card} />;
      })}
    </div>
  );
}
