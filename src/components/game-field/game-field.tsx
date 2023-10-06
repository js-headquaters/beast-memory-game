import { GameCardComponent } from "./game-card/game-card";
import { useContext } from "preact/compat";
import { GameStateContext } from "../../interfaces/context";
import "./game-field.css";

export function GameFieldComponent() {
  const { cards, horizontalCardsCount, verticalCardsCount } =
    useContext(GameStateContext);

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
