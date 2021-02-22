import * as React from "react";
import { usePrimeState, Prime } from ".";

export const PrimesView = () => {
  const state = usePrimeState();

  console.log(">>: Rendered -> PrimesView");

  if (Object.keys(state).length === 0) {
    return <h3 className="prime-color">Use the add Primes button to begin!</h3>;
  }
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
