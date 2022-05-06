import { actionCreatorFactory } from "typescript-fsa";

export const ActionFactory = actionCreatorFactory("AUTH");

export const authActionResult = ActionFactory.async<void, any, any>("LOGIN");

// export const authActionResultStart = ActionFactory("LOGIN_START");
// export const authActionResultDone = ActionFactory("LOGIN_DONE");
// export const authActionResultFailure = ActionFactory("LOGIN_FAILURE");

// export const authActionResultStart = { type: "AUTH/LOGIN_START" };
// export const authActionResultDone = (res: any) => ({
//   type: "AUTH/LOGIN_DONE",
//   data: res,
// });
// export const authActionResultFailure = (error: any) => ({
//   type: "AUTH/LOGIN_FAILURE",
//   data: error,
// });
