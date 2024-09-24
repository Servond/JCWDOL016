import "./style.css";
import { IJumbotron } from "./types";

function JumbotronSection(props: IJumbotron) {
  return (
    <div className="container">
      <h2>Ini Jumbotron Section</h2>
      <p>Hello {props.name}</p>
    </div>
  );
}

export default JumbotronSection;
