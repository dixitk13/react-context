import * as React from "react";
import { usePrimeState, Prime } from ".";

export const PrimesView = () => {
  console.log(">>: PrimesView");
  const state = usePrimeState();

  return (
    <>
      {Object.keys(state).map((index: string) => {
        return <Prime key={`prime-${index}`} index={Number(index)} />;
      })}
    </>
  );
};
