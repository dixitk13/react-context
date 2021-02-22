import * as React from "react";
import {
  nextPrimeState,
  deletePrime,
  usePrimeDispatch,
  usePrimeIterator,
  PrimeState,
} from "./";
import "./prime.scss";

interface PrimeProps extends PrimeState {
  index: number;
}

export const Prime = React.memo(({ index, series }: PrimeProps) => {
  const dispatch = usePrimeDispatch();
  const { next: nextNumber } = usePrimeIterator();

  const next = React.useCallback(() => {
    dispatch(nextPrimeState(index, series?.length ?? 0, Number(nextNumber())));
  }, [series]);

  const remove = React.useCallback(() => {
    dispatch(deletePrime(index));
  }, []);

  console.log(">>: Rendered -> Prime#", index);
  return (
    <div className="prime-container container">
      <h6>Prime# {index}</h6>
      <div className="primes">
        {series.map((x, index) => (
          <div className="prime" key={`prime-series-${index}`}>
            <div className="index">{x.index}</div>
            <div className="value">{x.value}</div>
          </div>
        ))}
      </div>
      <div className="actions">
        <button onClick={next}>Next</button>
        <button className="remove" onClick={remove}>
          Remove
        </button>
      </div>
    </div>
  );
});
