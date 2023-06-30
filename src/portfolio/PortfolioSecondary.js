import PortfolioSections from "./portfolioSections";
import PortfolioSecondMap from "./portfolioSecondMap";

const PortfolioSecond = () => {
  // const PortfolioSecondarySections = (el) => {
  //   return (
  //     <div
  //       key={el.id}
  //       className="P2Grid"
  //       style={{
  //         color: el.text,
  //         backgroundColor: el.colour,
  //       }}
  //     >
  //       <h1 className="P2Number">{el.number}</h1>
  //       <h1 className="P2Title">{el.title}</h1>
  //       <h1 className="P2Name">{el.name}</h1>
  //       <h1 className="P2Info">{el.info}</h1>
  //       <video
  //         className="P2Video"
  //         src={el.video}
  //         controls={false}
  //         autoPlay
  //         loop
  //         muted
  //         key={el.id}
  //       />
  //     </div>
  //   );
  // };

  return (
    <div>
      {PortfolioSections.map((props) => {
        return (
          <div key={props.id} className="parentContainer">
            <PortfolioSecondMap
              el={props}
              key={props.id}
              // isVisible={visibleItems.includes(props.id)}
            />
          </div>
        );
      })}
    </div>
  );
};
export default PortfolioSecond;
