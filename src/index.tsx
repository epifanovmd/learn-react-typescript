import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const renderApp = (Comp?: any) => {
  const container = document.getElementById("root");
  const root = createRoot(container!);

  root.render(<Comp />);
};

renderApp(App);

if ((module as any).hot) {
  (module as any).hot.accept("./App", () => {
    const NewApp = require("./App").default;

    renderApp(NewApp);
  });
}
