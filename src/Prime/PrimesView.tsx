import * as React from "react";
import { usePrimeState, Prime } from ".";

export const PrimesView = () => {
  const state = usePrimeState();

  console.log(">>: Rendered -> PrimesView");
  return (
    <>
      {Object.keys(state).map((index: string) => {
        const idx = Number(index);
        return (
          <Prime
            key={`prime-${index}`}
            index={idx}
            series={state?.[idx].series}
          />
        );
      })}
    </>
  );
};
