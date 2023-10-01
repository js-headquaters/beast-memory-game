import { render } from "preact";
import "./style.css";
import "./theme.css";
import { GameComponent } from "@components/game/game";

render(<GameComponent />, document.getElementById("app"));
