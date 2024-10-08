"use client";
import { useState } from "react";
import useCounterStore from "@/stores/counterStore";

export default function Template({ children }: { children: React.ReactNode }) {
  const { count, increment, decrement } = useCounterStore();
  return (
    <div className="bg-violet-200">
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {children}
    </div>
  );
}
