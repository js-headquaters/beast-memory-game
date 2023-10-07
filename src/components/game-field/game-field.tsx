import { GameCardComponent } from "./game-card/game-card";
import { useContext } from "preact/compat";
import { GameStateContext } from "../../interfaces/context";
import "./game-field.css";

/**
 * GameFieldComponent is responsible for displaying the game field and cards. It dynamically
 * adjusts the field size to ensure all cards fit within the screen while maintaining their
 * correct proportions.
 */
export function GameFieldComponent() {
  const { cards, horizontalCardsCount, verticalCardsCount } =
    useContext(GameStateContext);

  let style = `--horizontal-cards-count: ${horizontalCardsCount.value};`;
  style += `--vertical-cards-count: ${verticalCardsCount.value};`;

  return (
    <div style={style} class="game-field">
      <div class="game-field__cards">
        {cards.value.map((card) => {
          return <GameCardComponent key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}
