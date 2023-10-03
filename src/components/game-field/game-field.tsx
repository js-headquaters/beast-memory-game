import { GameCardComponent } from "@components/game-card/game-card";
import { gameStateService } from "@services/game-state.service";
import "./game-field.css";

export function GameFieldComponent() {
  const { cards } = gameStateService;

  return (
    <div class="game-field">
      <div class="game-field__cards">
        {cards.value.map((card) => {
          return <GameCardComponent {...card} />;
        })}
      </div>
    </div>
  );
}
