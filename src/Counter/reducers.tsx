import {
  CounterStateEnum,
  Counters,
  CounterAction,
  CounterState,
} from "./interface";
import { omit } from "../helpers/functions";

export const initialCounterState: CounterState = {
  value: 0,
};

export const initialState: Counters = {};

export const reducer = (state: Counters, action: CounterAction) => {
  console.log(">>: Counter reducer action -> ", action);
  switch (action.type) {
    case CounterStateEnum.COUNTER_STATE_CREATE:
      return {
        ...state,
        [action.index]: initialCounterState,
      };
    case CounterStateEnum.COUNTER_STATE_INCREMENT:
      return {
        ...state,
        [action.index]: {
          ...state[action.index],
          value: state[action.index].value + 1,
        },
      };
    case CounterStateEnum.COUNTER_STATE_DECREMENT:
      return {
        ...state,
        [action.index]: {
          value: state[action.index].value - 1,
        },
      };
    case CounterStateEnum.COUNTER_STATE_DELETE:
      return {
        ...omit(state, action.index),
      };
    default:
      throw new Error(`Unhandled action type`);
  }
};
