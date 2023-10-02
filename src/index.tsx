import { GameComponent } from "@components/game/game";
import { render } from "preact";
import "./style.css";
import "./theme.css";

render(<GameComponent />, document.getElementById("app"));
