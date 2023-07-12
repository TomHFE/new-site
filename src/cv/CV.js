import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Experience from "./Experience";
import KeySkills from "./KeySkills";
import PreviousWork from "./PreviousWork";
import "./cv.css";
import { Link } from "react-router-dom";

function CV() {
  return (
    <div className="mainClass">
      <Link to="/menu">
        <h2 id="cvMenu">MENU</h2>
      </Link>
      <ContactInfo />
      <hr />
      <Experience />
      <hr />
      <KeySkills />
      <hr />
      <Education />
      <hr />
      <PreviousWork />
    </div>
  );
}

export default CV;
