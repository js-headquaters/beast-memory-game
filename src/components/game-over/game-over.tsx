import { gameStateService } from "@services/game-state.service";
import { getWebAppUser } from "@utils/telegram.utils";
import "./game-over.css";

export function GameOverComponent() {
  const { timeSpent, latestResults, increaseLevel, degreesLevel, gameLevel, start } =
    gameStateService;

  const username = getWebAppUser()?.first_name ?? "player";

  return (
    <div class="game-over">
      <div>Very Impressive {username}!</div>
      <div>Time spent: {timeSpent.value}</div>
      <div>Latest results!</div>
      <div>They are: {latestResults()}</div>
      <div>Average time spent: TODO</div>

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
