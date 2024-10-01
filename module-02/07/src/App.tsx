import { useState } from "react";
// import Local from "./localState/local";
// import State from "./localState/state";
import { useCookies } from "react-cookie";
import LocalStorage from "./localStorage/localStorage";
import SessionStorage from "./sessionStorage/sessionstorage";
import Cookies from "./cookies/cookies";
import ReactRedux from "./reactRedux/reactRedux";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const user = localStorage.getItem("user");
  const token = sessionStorage.getItem("token");
  const [cookies] = useCookies(["nama"]);

  // const [count, setCount] = useState<number>(0);

  return (
    <>
      {user}
      <LocalStorage />
      {token}
      <SessionStorage />
      {cookies?.nama}
      <Cookies />
      <ReactRedux />
      {/* <Local count={count} />
      <State count={count} /> */}
    </>
  );
}

export default App;
