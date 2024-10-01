import { useCookies } from "react-cookie";

function Cookies() {
  const [cookies, setCookies, removeCookie] = useCookies(["nama"]);
  return (
    <div>
      <div>
        <button onClick={() => setCookies("nama", "Budi")}>Add Cookies</button>
        <button onClick={() => removeCookie("nama")}>Add Cookies</button>
      </div>
    </div>
  );
}

export default Cookies;
