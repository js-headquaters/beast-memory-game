import { useContext } from "preact/hooks";
import { GameStateContext } from "./game-state.service";
import { GameFieldCardComponent } from "./game-field-card";

export function GameFieldComponent() {
  const gameState = useContext(GameStateContext);

  let style = `--horizontal-card-count: ${gameState.gameField.value.horizontalCardsCount};`;
  style += `--vertical-card-count: ${gameState.gameField.value.verticalCardsCount};`;

  return (
    <div style={style} class="game-field">
      {gameState.gameField.value.cards.map((card) => {
        return <GameFieldCardComponent {...card} />;
      })}
    </div>
  );
}
