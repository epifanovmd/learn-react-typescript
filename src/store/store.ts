import { combineReducers, createStore } from "redux";
import { reducers } from "./reducers";

export const initStore = () =>
  createStore(combineReducers(reducers), { authState: null });
