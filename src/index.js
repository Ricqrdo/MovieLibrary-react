import React from "react";
import ReactDOM from "react-dom";

import "./main.scss";
import "./components/_MovieCard.scss";
import "./components/_Search.scss";

import App from "./App";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
