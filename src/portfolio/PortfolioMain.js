import Portfolio from "./Portfolio";
import PortfolioSecond from "./PortfolioSecondary";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MotionConfig } from "framer-motion";

const PortfolioMain = () => {
  // screen width conditional render hook
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // use effect for screen size change
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* menu */}
      <Link to="/menu">
        <h1 className="P2Menu" style={{ textDecoration: "none" }}>
          MENU
        </h1>
      </Link>
      {/* portfolio full screen and not full screen conditional render */}
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
