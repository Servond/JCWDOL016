"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">About</Link>
      <div>
        <p id-cy="counter">{count}</p>
        <button id-cy="increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button id-cy="decrement" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}
