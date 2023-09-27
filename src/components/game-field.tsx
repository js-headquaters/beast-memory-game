import { GameFieldCardComponent } from "@components/game-field-card";
import { GameStateContext } from "@services/game-state.service";
import { useContext } from "preact/hooks";

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
