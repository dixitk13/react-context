import {
  PrimeState,
  PrimeStateEnum,
  Primes,
  PrimeStateAction,
} from "./interface";
import { omit } from "../helpers/functions";

export const initialPrimeState: PrimeState = {
  series: [{ index: 0, value: 1 }],
};

export const initialState: Primes = {};

export const reducer = (state: Primes, action: PrimeStateAction) => {
  console.log(">>: primes reducer action -> ", action);
  switch (action.type) {
    case PrimeStateEnum.PRIME_STATE_NEXT:
      return {
        ...state,
        [action.index]: {
          series: [
            ...(state[action.index].series || []),
            { value: action.value, index: action.nth },
          ],
        },
      };

    case PrimeStateEnum.PRIME_STATE_CREATE:
      return {
        ...state,
        [action.index]: initialPrimeState,
      };
    case PrimeStateEnum.PRIME_STATE_DELETE:
      return {
        ...omit(state, action.index),
      };
    default:
      throw new Error(`Unhandled action type`);
  }
};
