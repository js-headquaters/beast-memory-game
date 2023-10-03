import { gameStateService } from "@services/game-state.service";
import "./game-menu.css";
import { gameMenuService } from "@services/game-menu.service";
import { getTelegramData } from "@utils/telegram.utils";
import { gameStatisticService } from "@services/game-statistic.service";

const EMPTY = "N/A";

export function GameMenuComponent() {
  const { increaseLevel, degreesLevel, gameLevel } = gameStateService;
  const { incrementDebugClickCount, isDebugActive } = gameMenuService;
  const { averageCardFlipsCount, averageTimeSpentInSeconds } =
    gameStatisticService;

  return (
    <div class="game-menu">
      <div onClick={incrementDebugClickCount} class="game-menu__header">
        Settings
      </div>
      <div class="game-menu__item">
        <div class="game-menu__item-name">Difficulty:</div>
        <div class="game-menu__item-value">
          <button onClick={degreesLevel}>-</button>
          <span>{gameLevel.value}</span>
          <button onClick={increaseLevel}>+</button>
        </div>
      </div>

      <div class="game-menu__header">Statistic</div>
      <div class="game-menu__item">
        <div class="game-menu__item-name">Average time:</div>
        <div class="game-menu__item-value">
          {averageTimeSpentInSeconds.value
            ? `${averageTimeSpentInSeconds.value}s`
            : EMPTY}
        </div>
      </div>

      <div class="game-menu__item">
        <div class="game-menu__item-name">Average flips:</div>
        <div class="game-menu__item-value">
          {averageCardFlipsCount.value ? averageCardFlipsCount.value : EMPTY}
        </div>
      </div>

      {isDebugActive.value && (
        <div class="game-menu__debug">{getTelegramData()}</div>
      )}
    </div>
  );
}
