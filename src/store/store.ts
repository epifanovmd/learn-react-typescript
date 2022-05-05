import { combineReducers, createStore } from "redux";
import { reducers } from "./reducers";
import { createContext, useContext, useState } from "react";

export const initStore = () => createStore(combineReducers(reducers));

//
//
//
//
//

export const CounterContext = createContext({});

export const useInitSore = () => {
  const [state, setState] = useState({ count: 0 });

  return { state, setState };
};

export const useCounterState = () => {
  const contextValue = useContext<any>(CounterContext);

  return { state: contextValue.state, setState: contextValue.setState };
};
