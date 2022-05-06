import React from "react";
import { CounterContext, initStore, useInitSore } from "./store/store";
import { Provider } from "react-redux";
import Auth from "./pages/auth/Auth.component";

const store = initStore();

const App = () => {
  const contextStore = useInitSore();

  return (
    <div>
      <CounterContext.Provider value={contextStore}>
        <Provider store={store}>
          <Auth initialValidate={true} />
        </Provider>
      </CounterContext.Provider>
    </div>
  );
};

export default App;
