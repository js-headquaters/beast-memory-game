import { GameCardComponent } from "@components/game-card/game-card";
import { GameStateContext } from "@services/game-state.service";
import { useContext } from "preact/hooks";
import "./game-field.css";

export function GameFieldComponent() {
  const { cards, horizontalCardsCount } = useContext(GameStateContext);

  const style = `--horizontal-cards-count: ${horizontalCardsCount.value};`;

  return (
    <div style={style} class="game-field">
      {cards.value.map((card) => {
        return <GameCardComponent {...card} />;
      })}
    </div>
  );
}
