import * as React from "react";
function* generatePrimes() {
  let current: number = 2;
  // map of non-primes
  let map: Map<number, number[]> = new Map();

  while (true) {
    if (map.has(current)) {
      const primes: number[] = map.get(current) || [];
      primes.forEach((prime) => {
        let nextNonPrime = prime + current;
        // creating map of non-primes
        if (map.has(nextNonPrime)) {
          map.get(nextNonPrime)?.push(prime);
        } else {
          map.set(nextNonPrime, [prime]);
        }
      });
      map.delete(current);
    } else {
      yield current;
      map.set(current ** 2, [current]);
    }
    current += 1;
  }
}

export const usePrimeIterator = () => {
  const [primeIterator] = React.useState(generatePrimes());
  const next = (): number => primeIterator.next().value || 0;
  return {
    next,
  };
};
