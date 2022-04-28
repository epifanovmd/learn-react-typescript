import { Action } from "redux";

const initialAuthState: any = {};

const authState = (state: any = initialAuthState, action: Action) => {
  switch (action.type) {
    case "AUTH/LOGIN": {
      console.log("LOGIN SUCCESS");
      break;
    }

    default:
      return state;
  }
};

export const reducers = { authState };

const authActionResult = { type: "AUTH/LOGIN", data: { test: "fadsfsdgs" } };
