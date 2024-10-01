import { useReducer, useContext, useState, useCallback } from "react";
import { AuthContext } from "../context/auth";
import Todos from "./todos";

interface IProps {
  name: string;
}

interface ICountAction {
  type: string;
  payload: number;
}

interface ICountState {
  count: number;
}

function reducer(state: ICountState, action: ICountAction) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

function Names(props: IProps) {
  const [todos, setTodos] = useState<string[]>([]);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const login = useContext(AuthContext);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <div>
      <h1>
        Hello {props.name}, you are {login?.isLogin ? "Login" : "Not Login"}
      </h1>
      {login?.isLogin ? (
        <button onClick={() => login?.setIsLogin(false)}>Logout</button>
      ) : (
        <button onClick={() => login?.setIsLogin(true)}>Login</button>
      )}
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        Decrement
      </button>
      {state.count}
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default Names;
