import { GameStateContext } from "@services/game-state.service";
import { useContext } from "preact/hooks";
import "./game-menu.css";
import { GameDebugComponent } from "@components/game-debug/game-debug";

export function GameMenuComponent() {
  const { timeSpent, increaseLevel, degreesLevel, gameLevel, start } =
    useContext(GameStateContext);

  return (
    <div class="game-menu">
      <div>Time spent: {timeSpent.value}</div>

      <div>Set Difficulty</div>
      <div class="game-menu__level-select">
        <button onClick={degreesLevel}>-</button>
        <span>{gameLevel.value}</span>
        <button onClick={increaseLevel}>+</button>
      </div>

      <button onClick={start}>Restart</button>

      <GameDebugComponent />
    </div>
  );
}
