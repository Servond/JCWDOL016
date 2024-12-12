// import Local from "./localState/local";
// import State from "./localState/state";
import { useCookies } from "react-cookie";
import LocalStorage from "./localStorage/localStorage";
import SessionStorage from "./sessionStorage/sessionstorage";
import Cookies from "./cookies/cookies";
import ReactRedux from "./reactRedux/reactRedux";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface IUsers {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function App() {
  const [users, setUsers] = useState<IUsers[]>([]);
  const user = localStorage.getItem("user");
  const token = sessionStorage.getItem("token");
  const [cookies] = useCookies(["nama"]);

  const fetchUsers = async () => {
    const { data } = await axios.get(
      "https://66fcfb8dc3a184a84d18998a.mockapi.io/api/v1/users"
    );
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  });

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
      {users?.map((item, idx) => (
        <div key={idx}>
          <p>{item.email}</p>
          <p>{item.password}</p>
          <p>{item.firstName}</p>
          <p>{item.lastName}</p>
        </div>
      ))}
      {/* <Local count={count} />
      <State count={count} /> */}
    </>
  );
}

export default App;
