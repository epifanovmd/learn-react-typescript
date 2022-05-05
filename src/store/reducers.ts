import { Action } from "redux";

const initialAuthState: any = {};
const initialCounterState: any = {
  count: 0,
};

// reducer
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

const counterState = (state: any = initialCounterState, action: Action) => {
  switch (action.type) {
    case "AUTH/LOGIN": {
      console.log("LOGIN SUCCESS");
      break;
    }

    default:
      return state;
  }
};

export const reducers = { authState, counterState };

// Action
const authActionResult = { type: "AUTH/LOGIN", data1: { test: "fadsfsdgs" } };

// // Redux: Хранилище глобальное
// //
// // - состояние (лбъект для храненния данных)
// // - экшены (это действия = объекты с описанием действия над состоянием)  = { type: "AUTH/LOGIN", data: { test: "fadsfsdgs" } }
// // - редьюсеры ( это чистые функции, которые принимаеют текущее состояние и экшен, и изменяют состояние (не модифицируя = не мутируя) и возвращает новое состояние)
//
// // мутации
// const obj = { name: "Alex" };
//
// obj.name = "Petr"; // мутировали
//
// // чистая функция это функции которые принимают на вход состояние, обрабатывают его и возвращают новое состояние
//
// const func = state => {
//   const newState = { ...state, name: "Alex" };
//
//   // newState.name = "Alex";
//
//   return newState;
// };
