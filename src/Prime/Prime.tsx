import * as React from "react";
import {
  nextPrimeState,
  deletePrime,
  usePrimeContext,
  usePrimeIterator,
} from "./";
import "./prime.scss";

interface PrimeProps {
  index: number;
}

export const Prime = ({ index }: PrimeProps) => {
  const { dispatch, state } = usePrimeContext();
  const { series } = state[index];
  const { next } = usePrimeIterator();

  return (
    <div className="prime-container container">
      <h6>Prime {index}</h6>
      <div className="primes">
        {series.map((x, index) => (
          <div className="prime" key={`prime-series-${index}`}>
            <div className="index">{x.index}</div>
            <div className="value">{x.value}</div>
          </div>
        ))}
      </div>
      <div className="actions">
        <button
          onClick={() =>
            dispatch(nextPrimeState(index, series?.length ?? 0, Number(next())))
          }
        >
          Next
        </button>
        <button className="remove" onClick={() => dispatch(deletePrime(index))}>
          Remove
        </button>
      </div>
    </div>
  );
};
