import * as React from "react";
import { useCounterState, Counter } from ".";

export const CountersView = () => {
  const state = useCounterState();
  console.log(">>: CountersView");
  return (
    <>
      {Object.keys(state).map((index) => {
        return <Counter key={`prime-${index}`} index={index} />;
      })}
    </>
  );
};
