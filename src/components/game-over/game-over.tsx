import { DebugContext } from "@services/debug.service";
import { useContext } from "preact/hooks";
import "./game-over.css";
import { GameStateContext } from "@services/game-state.service";

export function GameOverComponent() {
  const { timeSpent, latestResults, increaseLevel, degreesLevel, gameLevel, start } =
    useContext(GameStateContext);

  return (
    <div class="game-over">
      <div>Very Impressive!</div>
      <div>Time spent: {timeSpent.value}</div>
      <div>Latest results!</div>
      <div>They are: {latestResults}</div>

      <div>Set Difficulty</div>
      <div class="game-over__level-select">
        <button onClick={degreesLevel}>-</button>
        <span>{gameLevel.value}</span>
        <button onClick={increaseLevel}>+</button>
      </div>

      <button onClick={start}>Play again</button>
    </div>
  );
}
