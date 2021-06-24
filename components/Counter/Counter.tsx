import React from "react";
import {
  decrement,
  increment,
} from "../../functionReducer/Counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";

import styles from "./Counter.module.scss";

export const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
