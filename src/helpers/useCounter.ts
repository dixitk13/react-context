import * as React from "react";
export const useCounter = () => {
  const [counter, setCounter] = React.useState<number>(0);

  const nextCounter = () => {
    const prev = counter;
    setCounter(counter + 1);
    return prev;
  };

  return {
    counter,
    nextCounter,
  };
};
