import { useState, useEffect, useRef, useMemo } from "react";
import Names from "./components/names";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const inputRef = useRef<null | HTMLInputElement>(null);
  const countRef = useRef<number>(0);

  useEffect(() => {
    console.log("jalan");
    console.log(countRef);
    document.title = `click ${count}`;
  });

  // function isCountEven() {
  //   let i = 0;
  //   while (i < 2000000000) {
  //     i++;
  //   }

  //   return count % 2 === 0;
  // }

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
        <input type="text" />
        {isCountEven ? "even" : "odd"}
        <p>{name}</p>
        <button
          onClick={() => {
            countRef.current += 1;
            inputRef.current?.focus();
          }}
        >
          Click me {countRef.current}
        </button>
      </div>
    </>
  );
}

export default App;
