interface Prime {
  value: number;
  index: number;
}

export interface PrimeState {
  series: Prime[];
}

export interface Primes {
  [index: number]: PrimeState;
}

export enum PrimeStateEnum {
  PRIME_STATE_NEXT = "PRIME_STATE_NEXT",
  PRIME_STATE_DELETE = "PRIME_STATE_DELETE",
  PRIME_STATE_CREATE = "PRIME_STATE_CREATE",
}

export interface PrimeStateIncrementAction {
  type: PrimeStateEnum.PRIME_STATE_NEXT;
  index: number;
  value: number;
  nth: number;
}

export interface PrimeStateDeleteAction {
  type: PrimeStateEnum.PRIME_STATE_DELETE;
  index: number;
}

export interface PrimeStateCreateAction {
  type: PrimeStateEnum.PRIME_STATE_CREATE;
  index: number;
}

export type PrimeStateAction =
  | PrimeStateCreateAction
  | PrimeStateIncrementAction
  | PrimeStateDeleteAction;

export type PrimeDispatch = React.Dispatch<PrimeStateAction>;
