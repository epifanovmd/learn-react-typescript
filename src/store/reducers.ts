import { counterState } from "../pages/testStore/TestStore.reducer";
import { authState } from "../pages/auth/Auth.reducer";

export const reducers = { authState, counterState };

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
