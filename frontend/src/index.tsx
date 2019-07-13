import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BattleshipApp from "./Battleship/BattleshipApp"
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<BattleshipApp />, document.getElementById("root"));

serviceWorker.unregister();
