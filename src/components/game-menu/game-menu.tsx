import { BlockComponent } from "@components/block/block";
import { SettingComponent } from "@components/game-menu/setting/setting";
import { KeyValueComponent } from "@components/key-value-list/key-value";
import { GameLevel } from "@interfaces/index";
import { computed, signal, useSignal, useSignalEffect } from "@preact/signals";
import { getWebAppData } from "@utils/telegram.utils";
import { Fragment, useContext } from "preact/compat";
import {
  GameStatisticContext,
  GameThemeContext,
} from "../../interfaces/context";
import { KeyValueListComponent } from "../key-value-list/key-value-list";
import "./game-menu.css";

const debugClickCount = signal(0);
const isDebugActive = computed(() => {
  return debugClickCount.value > 3;
});

const incrementDebugClickCount = () => {
  debugClickCount.value += 1;
};

export function GameMenuComponent() {
  const {
    averageCardFlipsCount,
    averageTimeSpentInSeconds,
    gameLevel,
    increaseLevel,
    degreesLevel,
    currentLevelStatistic,
  } = useContext(GameStatisticContext);
  const { toggleTheme, theme } = useContext(GameThemeContext);

  return (
    <div class="game-menu modal">
      <div onClick={incrementDebugClickCount} class="modal__header">
        Menu
      </div>

      {isDebugActive.value && (
        <BlockComponent title="Settings">
          <KeyValueListComponent>
            <SettingComponent
              name="Theme:"
              value={theme.value}
              increase={toggleTheme}
              degrees={toggleTheme}
            />
          </KeyValueListComponent>
        </BlockComponent>
      )}

      <BlockComponent title="Choose level">
        <KeyValueListComponent>
          <SettingComponent
            name="Level:"
            value={gameLevel.value}
            increase={increaseLevel}
            degrees={degreesLevel}
          />
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
        {currentLevelStatistic.value.length > 0 ? (
          <KeyValueListComponent>
            <div>Time</div>
            <div>Flips</div>
            {currentLevelStatistic.value?.map(
              ({ timeSpentInSeconds, cardFlipsCount }) => (
                <Fragment>
                  <div>{timeSpentInSeconds}</div>
                  <div>{cardFlipsCount}</div>
                </Fragment>
              )
            )}
          </KeyValueListComponent>
        ) : (
          <div>No data for this level</div>
        )}
      </BlockComponent>

      {isDebugActive.value && (
        <BlockComponent title="Debug Info">
          <div class="game-menu__debug">{getWebAppData()}</div>
        </BlockComponent>
      )}
    </div>
  );
}
