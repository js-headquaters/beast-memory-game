import { GameCardComponent } from "@components/game-card/game-card";
import "./game-field.css";
import {gameStateService} from "@services/index";

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
