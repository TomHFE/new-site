import Portfolio from "./Portfolio";
import PortfolioSecond from "./PortfolioSecondary";
import { useState, useEffect } from "react";

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
      {screenWidth > 1390 ? (
        <div>
          <Portfolio />
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
