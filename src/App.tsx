import * as React from "react";
import {
  CountersView,
  CounterProvider,
  useCounterDispatch,
  counterCreate,
} from "./Counter";
import {
  PrimesView,
  PrimeProvider,
  usePrimeDispatch,
  createPrime,
} from "./Prime";

import "./app.scss";
import { useCounter } from "./helpers";

export const App = () => {
  return (
    <PrimeProvider>
      <CounterProvider>
        <AppView />
      </CounterProvider>
    </PrimeProvider>
  );
};

const AppView = () => {
  return (
    <div className="app">
      <Actions />
      <PrimesView />
      <CountersView />
    </div>
  );
};

export const Actions = () => {
  console.log(">>: AppView -> AppView");
  const counterDispatch = useCounterDispatch();
  const primeDispatch = usePrimeDispatch();

  const { nextCounter } = useCounter();

  return (
    <div className="actions">
      <button
        className="counter-color"
        onClick={() => counterDispatch(counterCreate(nextCounter()))}
      >
        Add Counter
      </button>
      <button
        className="prime-color"
        onClick={() => primeDispatch(createPrime(nextCounter()))}
      >
        Add Prime
      </button>
    </div>
  );
};
