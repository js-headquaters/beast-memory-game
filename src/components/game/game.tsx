import { GameFieldComponent } from "@components/game-field/game-field";
import { GameMenuComponent } from "@components/game-menu/game-menu";
import { GameOverComponent } from "@components/game-over/game-over";
import { GameLevel, GameState } from "@interfaces/index";
import { gameMenuService } from "@services/game-menu.service";
import { gameStateService } from "@services/game-state.service";
import { isRunningInTelegram } from "@utils/telegram.utils";
import "./game.css";
import { useEffect, useState } from "preact/compat";
import { Storage } from "@services/telegram-api";
import { gameStatisticService } from "@services/game-statistic.service";

type GameStateComponent = typeof GameFieldComponent | typeof GameOverComponent;

const statesComponents = new Map<GameState, GameStateComponent>([
  ["run", GameFieldComponent],
  ["game_over", GameOverComponent],
]);

export function GameComponent() {
  const { currentState, horizontalCardsCount, verticalCardsCount } =
    gameStateService;
  const { isMenuOpen, toggleMenu, isMenuButtonVisible, menuButtonText } =
    gameMenuService;
  const [isLoaded, setIsLoaded] = useState(false);

  const StateComponent = statesComponents.get(currentState.value);

  let style = `--horizontal-cards-count: ${horizontalCardsCount.value};`;
  style += `--vertical-cards-count: ${verticalCardsCount.value};`;

  const showFallbackMenuButton = isMenuButtonVisible.value;

  useEffect(() => {
    // FIXME shitty shit
    Storage.getItem("level").then((level) => {
      const levelAsNumber = (Number(level) || 1) as GameLevel;
      gameStateService.gameLevel.value = levelAsNumber;
      gameStatisticService.gameLevel.value = levelAsNumber;
      setIsLoaded(true);

      // has to start here after fetching the level
      // cannot start the game in gameStateService constructor
      gameStateService.start();
    });
  }, []);

  if (!isLoaded) {
    return <>Loading...</>;
  }

  return (
    <div style={style} class="game">
      <div class="game__spacer"></div>
      <div class="game__content">
        {isMenuOpen.value ? <GameMenuComponent /> : <StateComponent />}

        {showFallbackMenuButton && (
          <button class="game__fallback-menu" onClick={toggleMenu}>
            {menuButtonText.value}
          </button>
        )}
      </div>
      <div class="game__spacer"></div>
    </div>
  );
}
