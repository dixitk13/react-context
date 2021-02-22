import * as React from "react";
import {
  counterDecrement,
  counterIncrement,
  counterDelete,
  useCounterDispatch,
} from "./";
import "./styles.scss";

interface CounterProps {
  index: number;
  value: number;
}
export const Counter = React.memo(({ index, value }: CounterProps) => {
  const dispatch = useCounterDispatch();

  const increment = React.useCallback(() => {
    dispatch(counterIncrement(Number(index)));
  }, [index]);

  const decrement = React.useCallback(() => {
    dispatch(counterDecrement(Number(index)));
  }, [index]);

  const remove = React.useCallback(() => {
    dispatch(counterDelete(Number(index)));
  }, [index]);

  console.log(">>: Rendered -> Counter# ", index);
  return (
    <div className="counter-container container">
      <h1>{value}</h1>
      <h6>Count# {index}</h6>
      <div className="actions">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button className="remove" onClick={remove}>
          Remove
        </button>
      </div>
    </div>
  );
});
