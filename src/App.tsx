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
import { useCounter } from "./helpers";

import "./app.scss";

export const App = () => {
  console.log(">>: Rendered -> App");
  return (
    <div className="app">
      <PrimeProvider>
        <CounterProvider>
          <>
            <Actions />
            <PrimesView />
            <CountersView />
          </>
        </CounterProvider>
      </PrimeProvider>
    </div>
  );
};
const Actions = () => {
  const counterDispatch = useCounterDispatch();
  const primeDispatch = usePrimeDispatch();

  const { nextCounter, counter } = useCounter();
  const { nextCounter: nextPrimeCounter, counter: primeCounter } = useCounter();

  const addPrimeCallback = React.useCallback(() => {
    primeDispatch(createPrime(nextPrimeCounter()));
  }, [primeCounter]);

  const addCounterCallback = React.useCallback(() => {
    counterDispatch(counterCreate(nextCounter()));
  }, [counter]);

  console.log(">>: Rendered -> Actions");
  return (
    <div className="actions">
      <button className="counter-color" onClick={addCounterCallback}>
        Add Counter
      </button>
      <button className="prime-color" onClick={addPrimeCallback}>
        Add Prime
      </button>
    </div>
  );
};
