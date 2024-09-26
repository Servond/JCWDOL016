import "./style.css";
import { Link } from "react-router-dom";
import { IJumbotron } from "./types";

function JumbotronSection(props: IJumbotron) {
  return (
    <div className="container">
      <h2>Ini Jumbotron Section</h2>
      <p>Hello {props.name}</p>

      <Link to="/dashboard/testimoni">Testimoni</Link>
    </div>
  );
}

export default JumbotronSection;
