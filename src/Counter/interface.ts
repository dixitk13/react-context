export interface CounterState {
  value: number;
}

export interface Counters {
  [index: number]: CounterState;
}

export enum CounterStateEnum {
  COUNTER_STATE_INCREMENT = "COUNTER_STATE_INCREMENT",
  COUNTER_STATE_DECREMENT = "COUNTER_STATE_DECREMENT",
  COUNTER_STATE_DELETE = "COUNTER_STATE_DELETE",
  COUNTER_STATE_CREATE = "COUNTER_STATE_CREATE",
}

export interface CounterIncrementAction {
  type: CounterStateEnum.COUNTER_STATE_INCREMENT;
  index: number;
}

export interface CounterDecrementAction {
  type: CounterStateEnum.COUNTER_STATE_DECREMENT;
  index: number;
}

export interface CounterDeleteAction {
  type: CounterStateEnum.COUNTER_STATE_DELETE;
  index: number;
}

export interface CounterCreateAction {
  type: CounterStateEnum.COUNTER_STATE_CREATE;
  index: number;
}

export type CounterAction =
  | CounterCreateAction
  | CounterIncrementAction
  | CounterDecrementAction
  | CounterDeleteAction;

export type CounterDispatch = React.Dispatch<CounterAction>;
