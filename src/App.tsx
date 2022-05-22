import React, { useContext } from "react";
import { CounterContext, initStore, useInitSore } from "./store/store";
import { Provider } from "react-redux";
import Auth from "./pages/auth/Auth.component";
import { Registration } from "./pages/registration/Registration.compontent";
import { Todo } from "./pages/todo/Todo.component";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/notFound/NotFound.component";
import { CustomRoutes } from "./components/CustomRouter/CustomRoutes";
import { CustomRoute } from "./components/CustomRouter/CustomRoute";
import { RouterContext } from "./components/CustomRouter/CustomRouter";

const store = initStore();

const App = () => {
  const contextStore = useInitSore();

  return (
    <div style={{ padding: "32px" }}>
      <CounterContext.Provider value={contextStore}>
        <Provider store={store}>
          <Header />
          <CustomRoutes>
            <CustomRoute path="/" element={<div>Home</div>} />
            <CustomRoute path="/1" element={<div>1</div>} />
            <CustomRoute path="/2" element={<TestLink />} />
            <CustomRoute path="/3" element={<div>3</div>} />

            {/* <Route path="/" element={<Auth initialValidate={true} />} />*/}
            {/* <Route path="/registration" element={<Registration />} />*/}
            {/* <Route path="/todo" element={<Todo />} />*/}
            {/* <Route path="*" element={<NotFound />} />*/}
          </CustomRoutes>
        </Provider>
      </CounterContext.Provider>
    </div>
  );
};

export default App;

const Header = () => {
  const location = useCustomLocation();

  return <div>{location.history.join(" - ")}</div>;
};

const TestLink = () => {
  const t = [];

  const location = useCustomLocation();
  const { navigate } = useCustomNavigation();

  return (
    <div>
      <div>{"TEST LINK"}</div>

      <div>
        <button onClick={() => navigate("/1")}>Go to</button>
      </div>
    </div>
  );
};

const useCustomLocation = () => {
  const { state } = useContext(RouterContext);

  return state;
};

const useCustomNavigation = () => {
  const { setState } = useContext(RouterContext);

  const navigate = (newPath: string) => {
    setState((currentState: any) => ({
      path: newPath,
      history: [...currentState.history, newPath],
    }));
  };

  return { navigate };
};
