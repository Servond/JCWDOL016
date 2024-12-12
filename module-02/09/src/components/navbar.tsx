import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center items-center bg-[#008080] h-16">
      <div className="flex gap-14 text-white">
        <Link to="/users">Users</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Navbar;
