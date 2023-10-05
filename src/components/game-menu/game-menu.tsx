import { BlockComponent } from "@components/block/block";
import { SettingComponent } from "@components/game-menu/setting/setting";
import { getWebAppData } from "@utils/telegram.utils";
import { useContext } from "preact/compat";
import {
  GameLevelContext,
  GameMenuContext,
  GameStateContext,
  GameStatisticContext,
  GameThemeContext,
} from "../../context/game-state.context";
import { KeyValueListComponent } from "../key-value-list/key-value-list";
import "./game-menu.css";
import { KeyValueComponent } from "@components/key-value-list/key-value";

const EMPTY = "N/A";

export function GameMenuComponent() {
  const { increaseLevel, degreesLevel, gameLevel } =
    useContext(GameLevelContext);
  const { incrementDebugClickCount, isDebugActive } =
    useContext(GameMenuContext);
  const { averageCardFlipsCount, averageTimeSpentInSeconds } =
    useContext(GameStatisticContext);
  const { start } = useContext(GameStateContext);
  const { toggleTheme, theme } = useContext(GameThemeContext);

  const increaseLevelAndStart = () => {
    increaseLevel();
    start();
  };
  const decreaseLevelAndStart = () => {
    degreesLevel();
    start();
  };

  return (
    <div class="game-menu modal">
      <div onClick={incrementDebugClickCount} class="modal__header">
        Menu
      </div>

      <BlockComponent title="Settings">
        <KeyValueListComponent>
          <SettingComponent
            name="Difficulty:"
            value={`level ${gameLevel.value}`}
            increase={increaseLevelAndStart}
            degrees={decreaseLevelAndStart}
          />
          {isDebugActive.value && (
            <SettingComponent
              name="Theme:"
              value={theme.value}
              increase={toggleTheme}
              degrees={toggleTheme}
            />
          )}
        </KeyValueListComponent>
      </BlockComponent>

      <BlockComponent title="Game Statistic">
        <KeyValueListComponent>
          <KeyValueComponent
            name="Average Time:"
            value={averageTimeSpentInSeconds.value}
          />
          <KeyValueComponent
            name="Average Flips:"
            value={averageCardFlipsCount.value}
          />
        </KeyValueListComponent>
      </BlockComponent>

      <BlockComponent title="Game history">
        <div>TODO make some table</div>
      </BlockComponent>

      {isDebugActive.value && (
        <BlockComponent title="Debug Info">
          <div class="game-menu__debug">{getWebAppData()}</div>
        </BlockComponent>
      )}
    </div>
  );
}
