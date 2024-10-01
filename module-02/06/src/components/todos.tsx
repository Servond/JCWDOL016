import { memo } from "react";
interface ITodos {
  todos: string[];
  addTodo: () => void;
}

function Todos(props: ITodos) {
  const { todos, addTodo } = props;

  console.log("child render");

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default memo(Todos);
