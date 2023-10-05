import { getWebAppData } from "@utils/telegram.utils";
import "./game-menu.css";
import {useContext} from "preact/compat";
import {
    GameLevelContext, GameMenuContext,
    GameStateContext,
    GameStatisticContext,
    GameThemeContext
} from "../../context/game-state.context";

const EMPTY = "N/A";

export function GameMenuComponent() {
  const { increaseLevel, degreesLevel, gameLevel } = useContext(GameLevelContext)
  const { incrementDebugClickCount, isDebugActive } = useContext(GameMenuContext);
  const { averageCardFlipsCount, averageTimeSpentInSeconds } =
    useContext(GameStatisticContext);
  const { start } = useContext(GameStateContext);
  const { toggleTheme, theme } = useContext(GameThemeContext);

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
    <div class="game-menu menu">
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
        <div class="game-menu__debug">{getWebAppData()}</div>
      )}
    </div>
  );
}
