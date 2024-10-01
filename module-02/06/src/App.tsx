import { useState, useEffect, useRef, useMemo } from "react";
import useCounter from "./hooks/counter";
import Names from "./components/names";
import "./App.css";

function App() {
  const [counts, increment, decrement] = useCounter(0, 1);
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const inputRef = useRef<null | HTMLInputElement>(null);
  const countRef = useRef<number>(0);

  useEffect(() => {
    console.log("jalan");
    console.log(countRef);
    document.title = `click ${count}`;
  });

  const isCountEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }

    return count % 2 === 0;
  }, [count]);

  return (
    <>
      <div>
        <Names name={name} />
        <button onClick={() => setCount(count + 1)}>Click me {count}</button>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {isCountEven ? "even" : "odd"}
        <p>{name}</p>
        <button
          onClick={() => {
            countRef.current += 1;
            inputRef.current?.focus();
            console.log(inputRef.current);
          }}
        >
          Click me {countRef.current}
        </button>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => setData((i) => [...i, input])}>Save</button>
        {data?.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
        <p>{counts}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
