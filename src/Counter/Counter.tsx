import * as React from "react";
import {
  counterDecrement,
  counterIncrement,
  counterDelete,
  useCounterContext,
} from "./";
import "./styles.scss";

interface CounterProps {
  index: string;
}
export const Counter = React.memo(({ index }: CounterProps) => {
  const { state, dispatch } = useCounterContext();

  const { value } = state?.[Number(index)];

  return (
    <div className="counter-container container">
      <h1>{value}</h1>
      <h6>Count# {index}</h6>
      <div className="actions">
        <button onClick={() => dispatch(counterIncrement(Number(index)))}>
          Increment
        </button>
        <button onClick={() => dispatch(counterDecrement(Number(index)))}>
          Decrement
        </button>
        <button
          className="remove"
          onClick={() => dispatch(counterDelete(Number(index)))}
        >
          Remove
        </button>
      </div>
    </div>
  );
});
