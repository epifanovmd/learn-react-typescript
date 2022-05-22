import React, { createContext, FC, useEffect, useState } from "react";

interface IProps {
  children: any;
}

const initialRouterState: any = { path: "/2", history: ["/2"] };

export const RouterContext = createContext(initialRouterState);

export const CustomRouter: FC<IProps> = ({ children }) => {
  const [state, setState] = useState(initialRouterState);

  useEffect(() => {
    window.onpopstate = function () {
      alert("onpopstate");
    };
  }, []);

  const onPrevPage = () => {
    const currentPathIndex = state.history.findIndex(
      (path: any) => path === state.path,
    );

    if (currentPathIndex > 0) {
      setState({ path: state.history[currentPathIndex - 1] });
    }
  };

  const onNewPage = () => {
    const currentPathIndex = state.history.findIndex(
      (path: any) => path === state.path,
    );

    const historyLength = state.history.length - 1;

    if (currentPathIndex < historyLength) {
      setState({ path: state.history[currentPathIndex + 1] });
    }
  };

  return (
    <RouterContext.Provider value={{ state, setState }}>
      {children}
    </RouterContext.Provider>
  );
};

// { state, setState } = { state: state, setState: setState }
