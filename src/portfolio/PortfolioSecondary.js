import PortfolioSections from "./portfolioSections";
import PortfolioSecondMap from "./portfolioSecondMap";
import { Link } from "react-router-dom";

const PortfolioSecond = () => {
  return (
    <div>
     
      {PortfolioSections.map((props) => {
        return (
          <div key={props.id} className="parentContainer">
            <PortfolioSecondMap
              el={props}
              key={props.id}
             
            />
          </div>
        );
      })}
    </div>
  );
};
export default PortfolioSecond;
