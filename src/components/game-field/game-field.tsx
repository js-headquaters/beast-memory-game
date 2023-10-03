import { GameCardComponent } from "@components/game-card/game-card";
import { gameStateService } from "@services/game-state.service";
import "./game-field.css";

export function GameFieldComponent() {
  const { cards } = gameStateService;

  return (
    <div class="game-field">
      {cards.value.map((card) => {
        return <GameCardComponent {...card} />;
      })}
    </div>
  );
}
