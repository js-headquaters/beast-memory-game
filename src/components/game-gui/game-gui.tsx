import { GameStateContext } from "@services/game-state.service";
import { useContext } from "preact/hooks";
import "./game-gui.css";

export function GameControlsComponent() {
  const {
    gameLevel: gameDifficulty,
    start,
    degreesLevel,
    increaseLevel,
  } = useContext(GameStateContext);

  return (
    <div class="game-gui">
      <div class="game-gui__level">
        <button onClick={degreesLevel}>deg</button>
        <span>{gameDifficulty.value}</span>
        <button onClick={increaseLevel}>inc</button>
      </div>
      <button onClick={start}>new game</button>
    </div>
  );
}
