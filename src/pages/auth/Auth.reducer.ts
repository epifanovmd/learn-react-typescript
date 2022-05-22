import { reducerWithInitialState } from "typescript-fsa-reducers";
import { authActionResult } from "./Auth.actions";

const initialAuthState: any = {
  loading: false,
  error: undefined,
};

export const authState = reducerWithInitialState(initialAuthState)
  .case(authActionResult.started, state => ({ ...state, loading: true }))
  .case(authActionResult.done, (state, payload: any) => ({
    ...state,
    ...payload,
    loading: false,
  }))
  .case(authActionResult.failed, (state, payload: any) => ({
    ...state,
    loading: false,
    error: payload.data,
  }));

// export const authState = (state: any = initialAuthState, action: any) => {
//   console.log("authState", action);
//   switch (action.type) {
//     case "AUTH/LOGIN_START": {
//       const newState = { ...state, loading: true };
//
//       return newState;
//     }
//     case "AUTH/LOGIN_DONE": {
//       const newState = { ...state, ...action.data, loading: false };
//
//       return newState;
//     }
//
//     case "AUTH/LOGIN_FAILURE": {
//       const newState = { ...state, loading: false, error: action.data };
//
//       return newState;
//     }
//
//     default:
//       return state;
//   }
// };
