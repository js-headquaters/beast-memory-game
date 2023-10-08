import { PanelComponent } from "@components/shared/panel/panel";
import { KeyValueComponent } from "@components/shared/key-value-list/key-value";
import { KeyValueListComponent } from "@components/shared/key-value-list/key-value-list";
import { ModalComponent } from "@components/shared/modal/modal";
import { ValueSelectorComponent } from "@components/shared/value-selector/value-selector";
import { computed, signal } from "@preact/signals";
import { getWebAppData } from "@utils/telegram.utils";
import { useContext } from "preact/compat";
import {
  GameStateContext,
  StatisticContext,
  ThemeContext,
} from "@interfaces/context";
import { HistoryComponent } from "./history/history";
import "./statistic.css";

const debugClickCount = signal(0);
const isDebugActive = computed(() => {
  return debugClickCount.value >= 10;
});

/**
 * StatisticComponent grants the user the ability to review their recent game history.
 * It showcases the average statistics related to the time taken to complete levels and
 * the number of card flips made. This component serves as a performance reflection tool
 * for users, enabling them to understand and analyze their gameplay trends.
 */
export function StatisticComponent() {
  const {
    averageCardFlipsCount,
    averageTimeSpentInSeconds,
    gameLevelForStatistic,
    increaseStatisticLevel,
    decreaseStatisticLevel,
    resetStatistics,
    currentLevelStatistic,
  } = useContext(StatisticContext);
  const { toggleTheme, theme } = useContext(ThemeContext);
  const {
    increaseLevel,
    decreaseLevel,
    gameLevel,
    showDebugInfo,
    toggleShowDebugInfo,
  } = useContext(GameStateContext);

  return (
    <ModalComponent
      title="Statistic"
      className="statistic"
      onTitleClick={() => {
        debugClickCount.value += 1;
      }}
    >
      {isDebugActive.value && (
        <PanelComponent title="Settings">
          <KeyValueListComponent>
            <div>Current Level:</div>
            <ValueSelectorComponent
              value={gameLevel.value}
              increase={increaseLevel}
              decrease={decreaseLevel}
            />
            <div>Theme:</div>
            <ValueSelectorComponent
              value={theme.value}
              increase={toggleTheme}
              decrease={toggleTheme}
            />
            <div>Show debug info:</div>
            <ValueSelectorComponent
              value={showDebugInfo.value ? "Yes" : "No"}
              increase={toggleShowDebugInfo}
              decrease={toggleShowDebugInfo}
            />
            <button class="statistic__reset-button" onClick={resetStatistics}>
              Reset Statistic
            </button>
          </KeyValueListComponent>
        </PanelComponent>
      )}

      <PanelComponent title="Show data for level">
        <ValueSelectorComponent
          className="statistic__level-selector"
          value={gameLevelForStatistic.value}
          increase={increaseStatisticLevel}
          decrease={decreaseStatisticLevel}
        />
      </PanelComponent>

      <PanelComponent title="Game statistic">
        <KeyValueListComponent>
          <KeyValueComponent
            name="Average time:"
            value={averageTimeSpentInSeconds.value}
          />
          <KeyValueComponent
            name="Average flips:"
            value={averageCardFlipsCount.value}
          />
        </KeyValueListComponent>
      </PanelComponent>

      <PanelComponent title="Game history">
        <HistoryComponent
          level={gameLevelForStatistic.value}
          gameStatistic={currentLevelStatistic.value}
        />
      </PanelComponent>

      {showDebugInfo.value && (
        <PanelComponent title="Debug Info">
          <div className="statistic__debug">{getWebAppData()}</div>
        </PanelComponent>
      )}
    </ModalComponent>
  );
}
