import {
  PrimeStateEnum,
  PrimeStateDeleteAction,
  PrimeStateIncrementAction,
  PrimeStateCreateAction,
} from "./interface";

export const nextPrimeState = (
  index: number,
  nth: number,
  value: number
): PrimeStateIncrementAction => {
  return {
    index,
    nth,
    value,
    type: PrimeStateEnum.PRIME_STATE_NEXT,
  };
};

export const deletePrime = (index: number): PrimeStateDeleteAction => {
  return {
    index,
    type: PrimeStateEnum.PRIME_STATE_DELETE,
  };
};

export const createPrime = (index: number): PrimeStateCreateAction => {
  return {
    index,
    type: PrimeStateEnum.PRIME_STATE_CREATE,
  };
};
