import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  ICount,
  increment,
  decrement,
  incrementByAmount,
} from "../redux/slice/counter";

function ReactRedux() {
  const [input, setInput] = useState<number>(0);
  const count = useSelector(
    (state: { counter: ICount }) => state.counter.value
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <input
          type="number"
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(input))}>
          Increment By Amount
        </button>
      </div>
    </div>
  );
}

export default ReactRedux;
