import "./Portfolio.css";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import portfolioSections from "./portfolioSections";

const Portfolio = () => {
  const ref = useRef(null);

  const [id, setID] = useState(1);
  const [animate, setAnimate] = useState(1);

  const idRef = useRef(0);

  // const laggingIdRef = useRef([]);

  const handleID = (id) => {
    setTimeout(() => {
      idRef.current = id;
      setID(idRef.current);
    }, 200);
  };

  useEffect(() => {
    setTimeout(() => {
      if (animate === 0) {
        setAnimate(1);
      }
    }, 500);
  }, [animate]);

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

  const maskVariants = {
    hidden: {
      opacity: 0,
      // width: `${width}px`,
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

      // height: "0%",
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

  const flexBox = (flexVariants, ids, number, styling, position) => {
    return (
      <motion.li
        variants={flexVariants}
        initial="start"
        animate={ids === number ? "middle" : "end"}
        exit="end"
        transition={{ duration: 0.3 }}
        id={styling}
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
      <div
        className="centerPortfolio"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
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
                key={idRef}
                variants={introVariants}
                initial="hidden"
                animate={animate === 1 ? "visible" : "hidden"}
              >
                {portfolioSections[id].name.toUpperCase()}
              </motion.h1>
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
              <motion.p
                variants={introVariants}
                initial="hidden"
                animate={animate === 1 ? "visible" : "hidden"}
                id={`portfolioInfoGrid${id}`}
                className="portfolioInfo"
              >
                {portfolioSections[id].info}
              </motion.p>

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
