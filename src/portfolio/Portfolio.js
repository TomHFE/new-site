import "./Portfolio.css";
import { useState, useRef } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import portfolioSections from "./portfolioSections";
import FromLeft from "../framer-variants/Left";
import FromRight from "../framer-variants/Right";

const Portfolio = () => {
  const [id, setID] = useState(1);

  const idRef = useRef(0);

  const handleID = (id) => {
    idRef.current = id;
    setID(idRef.current);
  };

  const flexVariants = {
    start: {
      flex: 1,
    },

    middle: {
      flex: 28,
    },

    end: {
      flex: 1,
    },
  };
  const flexBox = (flexVariants, ids, number, styling, position) => {
    return (
      <motion.li
        variants={flexVariants}
        initial="start"
        animate={ids === number ? "middle" : "end"}
        exit="end"
        transition={{ duration: 0.3 }}
        id={styling}
        onMouseDownCapture={() => {
          handleID(position.id);
        }}
      >
        {position.number}
      </motion.li>
    );
  };

  return (
    <AnimatePresence>
      <div className="centerPortfolio">
        <p id={`portfolioClick`}>
          <a
            // className="aTag"
            style={{
              zIndex: 100001,
              textDecoration: "none",
              color: "inherit",
            }}
            href={portfolioSections[id].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            click here to find out more
          </a>
        </p>
        <div className="positionElements">
          <ul className="flexNumbers">
            {flexBox(flexVariants, id, 0, "flexBox1", portfolioSections[0])}
            {flexBox(flexVariants, id, 1, "flexBox2", portfolioSections[1])}
            {flexBox(flexVariants, id, 2, "flexBox3", portfolioSections[2])}
            {flexBox(flexVariants, id, 3, "flexBox4", portfolioSections[3])}
            {flexBox(flexVariants, id, 4, "flexBox5", portfolioSections[4])}
          </ul>
          {idRef && (
            <div className="portfolioGrid">
              <motion.h1
                id={`portfolioTitleGrid${id}`}
                className="portfolioTitle"
                key={portfolioSections[id]}
              >
                {portfolioSections[id].name.toUpperCase()}
              </motion.h1>
              <h1 id={`portfolioNumberGrid${id}`} className="portfolioNumber">
                {portfolioSections[id].number}
              </h1>
              <p id={`portfolioInfoGrid${id}`} className="portfolioInfo">
                {portfolioSections[id].info}
              </p>

              <div className="videoContainer" id={`portfolioVideoGrid${id}`}>
                <video
                  className="portfolioVideo"
                  src={portfolioSections[id].video}
                  controls={false}
                  autoPlay
                  loop
                  muted
                  key={portfolioSections[id].id}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};
export default Portfolio;
