import { useState } from "react";

function useCounter(val: number, step: number) {
  const [counts, setCount] = useState<number>(val);

  function increment() {
    setCount(counts + step);
  }

  function decrement() {
    setCount(counts - step);
  }

  return [counts, increment, decrement] as const;
}

export default useCounter;
