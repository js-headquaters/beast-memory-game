import { GameCardComponent } from "@components/game-card/game-card";
import "./game-field.css";
import { useContext } from "preact/compat";
import { GameStateContext } from "../../interfaces/context";

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
