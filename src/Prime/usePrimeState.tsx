import * as React from "react";

import { reducer, initialState } from "./reducers";
import { Primes, PrimeDispatch } from "./interface";

const PrimeStateContext = React.createContext<Primes>(initialState);
const PrimeDispatchContext = React.createContext<PrimeDispatch>(
  () => undefined
);

export const usePrimeState = (): Primes => {
  return React.useContext(PrimeStateContext);
};

export const usePrimeDispatch = (): PrimeDispatch => {
  return React.useContext(PrimeDispatchContext);
};

export const usePrimeContext = () => {
  const state = usePrimeState();
  const dispatch = usePrimeDispatch();
  return {
    state,
    dispatch,
  };
};

interface PrimeProviderProps {
  children: React.ReactChild | React.ReactChildren;
}

export const PrimeProvider = (props: PrimeProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <PrimeStateContext.Provider value={state}>
      <PrimeDispatchContext.Provider value={dispatch}>
        {props.children}
      </PrimeDispatchContext.Provider>
    </PrimeStateContext.Provider>
  );
};
