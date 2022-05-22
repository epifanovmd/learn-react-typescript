import React from "react";
import "./assets/global.scss";
import { createRoot } from "react-dom/client";

import App from "./App";
import { CustomRouter } from "./components/CustomRouter/CustomRouter";

const renderApp = (Comp?: any) => {
  const container = document.getElementById("root");
  const root = createRoot(container!);

  root.render(
    <CustomRouter>
      <Comp />
    </CustomRouter>,
  );
};

renderApp(App);

if ((module as any).hot) {
  (module as any).hot.accept("./App", () => {
    const NewApp = require("./App").default;

    renderApp(NewApp);
  });
}
