import React from "react";
import Auth from "./pages/auth/Auth.component";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Registration } from "./pages/registration/Registration.compontent";
import { Todo } from "./pages/todo/Todo.component";
import { useCookies } from "react-cookie";
import { initStore } from "./store/store";
import { Provider } from "react-redux";

const store = initStore();

const App = () => {
  const [cookies] = useCookies();

  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            {!cookies.token && (
              <Route
                path={"/"}
                render={() => <Auth initialValidate={true} />}
                exact={true}
              />
            )}

            {cookies.token && (
              <>
                <Route path={"/"} component={Todo} exact={true} />
                <Route
                  path={"/registration"}
                  component={Registration}
                  exact={true}
                />
              </>
            )}

            {/* <Redirect from={"*"} to={"/"} />*/}
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
