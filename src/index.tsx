import React from "react";
import "./assets/global.scss";

import ReactDOM from "react-dom";

import App from "./App";

const renderApp = (Comp?: any) => {
  ReactDOM.render(<Comp />, document.getElementById("root"));
};

renderApp(App);

if ((module as any).hot) {
  (module as any).hot.accept("./App", () => {
    const NewApp = require("./App").default;

    renderApp(NewApp);
  });
}
