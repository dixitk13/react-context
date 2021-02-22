import * as React from "react";
import { useCounterState, Counter } from ".";

export const CountersView = () => {
  const state = useCounterState();
  console.log(">>: Rendered -> CountersView");
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
