import { GameCardComponent } from "@components/game-card/game-card";
import "./game-field.css";
import { gameStateService } from "@services/index";

export function GameFieldComponent() {
  const { cards, horizontalCardsCount, verticalCardsCount } = gameStateService;

  let style = `--horizontal-cards-count: ${horizontalCardsCount.value};`;
  style += `--vertical-cards-count: ${verticalCardsCount.value};`;

  return (
    <div style={style} class="game-field">
      <div class="game-field__cards">
        {cards.value.map((card) => {
          return <GameCardComponent {...card} />;
        })}
      </div>
    </div>
  );
}
