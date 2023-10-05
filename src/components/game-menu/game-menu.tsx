import "./game-menu.css";
import { gameMenuService } from "@services/game-menu.service";
import { getTelegramData } from "@utils/telegram.utils";
import {
  gameLevelService,
  gameStateService,
  gameStatisticService,
  gameThemeService,
} from "@services/index";

const EMPTY = "N/A";

export function GameMenuComponent() {
  const { increaseLevel, degreesLevel, gameLevel } = gameLevelService;
  const { incrementDebugClickCount, isDebugActive } = gameMenuService;
  const { averageCardFlipsCount, averageTimeSpentInSeconds } =
    gameStatisticService;
  const { start } = gameStateService;
  const { toggleTheme, theme } = gameThemeService;

  const increaseLevelAndRestart = () => {
    const isIncreased = increaseLevel();
    if (isIncreased) {
      start();
    }
  };
  const decreaseLevelAndRestart = () => {
    const isDecreased = degreesLevel();
    if (isDecreased) {
      start();
    }
  };

  return (
    <div class="game-menu">
      <div onClick={incrementDebugClickCount} class="game-menu__header">
        Settings
      </div>
      <div class="game-menu__item">
        <div class="game-menu__item-name">Difficulty:</div>
        <div class="game-menu__item-value">
          <button
            className="game-menu__action-button"
            onClick={decreaseLevelAndRestart}
          >
            -
          </button>
          <span>{gameLevel.value}</span>
          <button
            className="game-menu__action-button"
            onClick={increaseLevelAndRestart}
          >
            +
          </button>
        </div>
      </div>

      <div class="game-menu__item">
        <div class="game-menu__item-name">Theme:</div>
        <div class="game-menu__item-value">
          <button className="game-menu__action-button" onClick={toggleTheme}>
            {theme.value}
          </button>
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

      <div class="game-menu__header">Game history</div>
      <div>TODO make some table</div>

      {isDebugActive.value && (
        <div class="game-menu__debug">{getTelegramData()}</div>
      )}
    </div>
  );
}
