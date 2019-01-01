import Portfolio from "./Portfolio";
import PortfolioSecond from "./PortfolioSecondary";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MotionConfig } from "framer-motion";

const PortfolioMain = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the screenWidth state whenever the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      console.log(screenWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Link to="/menu">
        <h1 className="P2Menu" style={{ textDecoration: "none" }}>
          MENU
        </h1>
      </Link>
      {screenWidth > 1390 ? (
        <div>
          <MotionConfig reducedMotion="always">
            <Portfolio />
          </MotionConfig>
        </div>
      ) : (
        <div>
          <PortfolioSecond />
        </div>
      )}
    </div>
  );
};
export default PortfolioMain;
