import {
  CounterIncrementAction,
  CounterDecrementAction,
  CounterDeleteAction,
  CounterCreateAction,
  CounterStateEnum,
} from "./interface";

export const counterIncrement = (index: number): CounterIncrementAction => {
  return {
    index,
    type: CounterStateEnum.COUNTER_STATE_INCREMENT,
  };
};

export const counterDecrement = (index: number): CounterDecrementAction => {
  return {
    index,
    type: CounterStateEnum.COUNTER_STATE_DECREMENT,
  };
};

export const counterDelete = (index: number): CounterDeleteAction => {
  return {
    index,
    type: CounterStateEnum.COUNTER_STATE_DELETE,
  };
};

export const counterCreate = (index: number): CounterCreateAction => {
  return {
    index,
    type: CounterStateEnum.COUNTER_STATE_CREATE,
  };
};
