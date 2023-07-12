import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="mainBorder">
        <div className="mainBody">
          <Spline
            id="main"
            scene="https://prod.spline.design/9oEZU4K8ZLhSfF2h/scene.splinecode"
          />
          <h1 className="mainTitle ">TOM ENGLAND</h1>
          <h2 className="mainSubHeading"> Web Developer</h2>
          <p className="mainParagraph">
            Looking for a position in front end development and software
            engineering
          </p>
          {/* use variants to change background from white to clear and change font from see through to white then work out correct transiition for desired effect */}
          <Link className="menuSign" to="/menu">
            <h1>MENU</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
