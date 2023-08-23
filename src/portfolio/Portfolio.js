import "./Portfolio.css";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import portfolioSections from "./portfolioSections";

const Portfolio = () => {
  // screen change ref
  const ref = useRef(null);
  // id hook
  const [id, setID] = useState(1);
  // animate hook
  const [animate, setAnimate] = useState(1);
  // id ref
  const idRef = useRef(0);
  // handle id change function
  const handleID = (id) => {
    setTimeout(() => {
      idRef.current = id;
      setID(idRef.current);
    }, 200);
  };
  // animation ref useeffect
  useEffect(() => {
    setTimeout(() => {
      if (animate === 0) {
        setAnimate(1);
      }
    }, 500);
  }, [animate]);
  // intro variants
  const introVariants = {
    hidden: {
      x: -20,
      opacity: 0,
      transition: { duration: 0.02 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
        type: "easeInOut",
      },
    },
  };
  // flex variant sizing
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
  // mask variants
  const maskVariants = {
    hidden: {
      opacity: 0,
      width: `260px`,
      height: "120px",
      transition: {
        opacity: {
          duration: 0.01,
        },
      },
    },
    visible: {
      opacity: 1,
      width: "0%",
      transition: {
        delay: 0.2,
        duration: 1.3,
        type: "easeInOut",
        opacity: {
          duration: 0.01,
        },
      },
    },
  };
  // flex box render function
  const flexBox = (flexVariants, ids, number, styling, position) => {
    return (
      // flex boxes
      <motion.li
        variants={flexVariants}
        initial="start"
        animate={ids === number ? "middle" : "end"}
        exit="end"
        transition={{ duration: 0.3 }}
        id={styling}
        // id change event
        onMouseUp={() => {
          handleID(position.id);
          setAnimate(0);
        }}
      >
        {position.number}
      </motion.li>
    );
  };

  return (
    <AnimatePresence>
      {/* portfolio body */}
      <div className="centerPortfolio">
        {/* link to github */}
        <p id={`portfolioClick`}>
          <a
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
        {/* flex boxes */}
        <div className="positionElements">
          <ul className="flexNumbers">
            {flexBox(flexVariants, id, 0, "flexBox1", portfolioSections[0])}
            {flexBox(flexVariants, id, 1, "flexBox2", portfolioSections[1])}
            {flexBox(flexVariants, id, 2, "flexBox3", portfolioSections[2])}
            {flexBox(flexVariants, id, 3, "flexBox4", portfolioSections[3])}
            {flexBox(flexVariants, id, 4, "flexBox5", portfolioSections[4])}
          </ul>
          {/* id ref conditional render */}
          {idRef && (
            <div className="portfolioGrid">
              {/* name */}
              <motion.h1
                id={`portfolioTitleGrid${id}`}
                className="portfolioTitle"
                key={idRef}
                variants={introVariants}
                initial="hidden"
                animate={animate === 1 ? "visible" : "hidden"}
              >
                {portfolioSections[id].name.toUpperCase()}
              </motion.h1>
              {/* number */}
              <motion.span id={`portfolioNumberGrid${id}`}>
                <motion.h1
                  id={`portfolioNumberGrid${id}`}
                  className="portfolioNumber"
                  ref={ref}
                  style={{ maxHeight: "100%" }}
                  variants={introVariants}
                  initial="hidden"
                  animate={animate === 1 ? "visible" : "hidden"}
                >
                  {portfolioSections[id].number}
                </motion.h1>
                {/* mask for number */}
                <motion.div
                  variants={maskVariants}
                  initial="hidden"
                  animate={animate === 1 ? "visible" : "hidden"}
                  className="mask"
                  style={{
                    marginTop: "-14vh",
                    zIndex: "10000000",
                    position: "absolute",
                    overflow: "hidden",
                  }}
                ></motion.div>
              </motion.span>
              {/* info section */}
              <motion.p
                variants={introVariants}
                initial="hidden"
                animate={animate === 1 ? "visible" : "hidden"}
                id={`portfolioInfoGrid${id}`}
                className="portfolioInfo"
              >
                {portfolioSections[id].info}
              </motion.p>
              {/* video */}
              <motion.div
                variants={introVariants}
                initial="hidden"
                animate={animate === 1 ? "visible" : "hidden"}
                className="videoContainer"
                id={`portfolioVideoGrid${id}`}
              >
                <video
                  className="portfolioVideo"
                  src={portfolioSections[id].video}
                  controls={false}
                  autoPlay
                  loop
                  muted
                  key={portfolioSections[id].id}
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};
export default Portfolio;
