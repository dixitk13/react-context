import * as React from "react";

import {
  CounterState,
  CounterDispatch,
  Counters,
  reducer,
  initialState,
} from "./";

const CounterStateContext = React.createContext<Counters>(initialState);
const CounterDispatchContext = React.createContext<CounterDispatch>(
  () => undefined
);

export const useCounterState = (): Counters => {
  return React.useContext(CounterStateContext);
};

export const useCounterDispatch = (): CounterDispatch => {
  return React.useContext(CounterDispatchContext);
};

export const useCounterContext = () => {
  const state = useCounterState();
  const dispatch = useCounterDispatch();
  return {
    state,
    dispatch,
  };
};

interface CounterProviderProps {
  children: React.ReactChild | React.ReactChildren;
}

export const CounterProvider = (props: CounterProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <CounterDispatchContext.Provider value={dispatch}>
      <CounterStateContext.Provider value={state}>
        {props.children}
      </CounterStateContext.Provider>
    </CounterDispatchContext.Provider>
  );
};
