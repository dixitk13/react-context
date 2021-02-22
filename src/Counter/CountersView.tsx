import * as React from "react";
import { useCounterState, Counter } from ".";

export const CountersView = () => {
  const state = useCounterState();
  console.log(">>: Rendered -> CountersView");

  if (Object.keys(state).length === 0) {
    return (
      <h3 className="counter-color">Use the add Counters button to begin!</h3>
    );
  }

  return (
    <>
      {Object.keys(state).map((index) => {
        const idx = Number(index);
        return (
          <Counter
            key={`prime-${index}`}
            index={idx}
            value={state?.[idx]?.value}
          />
        );
      })}
    </>
  );
};
