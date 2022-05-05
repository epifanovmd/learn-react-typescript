import React from "react";
import { CounterContext, initStore, useInitSore } from "./store/store";
import { Provider } from "react-redux";
import { Registration } from "./pages/registration/Registration.compontent";

const store = initStore();

const App = () => {
  const contextStore = useInitSore();

  return (
    <div>
      <CounterContext.Provider value={contextStore}>
        <Provider store={store}>
          {/* <Auth initialValidate={true} />*/}
          <Registration />
        </Provider>
      </CounterContext.Provider>
    </div>
  );
};

export default App;
