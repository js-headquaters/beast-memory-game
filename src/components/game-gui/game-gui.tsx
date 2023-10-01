import { GameStateContext } from "@services/game-state.service";
import { useContext } from "preact/hooks";
import "./game-gui.css";
import { DebugContext } from "@services/debug.service";

export function GameControlsComponent() {
  const { gameLevel, start, degreesLevel, increaseLevel, timeSpent } =
    useContext(GameStateContext);
  const { toggleDebugMode } = useContext(DebugContext);

  return (
    <div class="game-gui">
      <div class="game-gui__timer">{timeSpent.value ?? "00:00"}</div>
      <div class="game-gui__level">
        <button onClick={degreesLevel}>-</button>
        <span>{gameLevel.value}</span>
        <button onClick={increaseLevel}>+</button>
      </div>
      <button onClick={start}>reset</button>
      <button onClick={toggleDebugMode}>debug</button>
    </div>
  );
}
