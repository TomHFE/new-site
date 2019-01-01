import "./Portfolio.css";
import { useState, useRef, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useAnimationControls,
} from "framer-motion";
import portfolioSections from "./portfolioSections";
import FromLeft from "../framer-variants/Left";
import FromRight from "../framer-variants/Right";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const [id, setID] = useState(1);
  // const [laggingId, setLaggingID] = useState([]);

  const [animate, setAnimate] = useState(true);

  // const [scope, animate] = useAnimate();

  // const controls = useAnimationControls();

  const idRef = useRef(0);

  // const laggingIdRef = useRef([]);

  const handleID = (id) => {
    setTimeout(() => {
      idRef.current = id;
      setID(idRef.current);
    }, 200);
  };

  // const handleLaggingID = (id) => {
  //   // setLaggingID(...laggingId, id);
  //   laggingIdRef.current = id;
  // };

  // useEffect(() => {
  //   handleLaggingID(id);
  // }, [id]);
  useEffect(() => {
    setTimeout(() => {
      if (animate === 0) {
        setAnimate(1);
      }
    }, 500);
  }, [animate]);
  // let animate

  // if (isOpen) {
  //   animate = shouldReduceMotion ? { opacity: 1 } : { x: 0 }
  // } else {
  //   animate = shouldReduceMotion
  //     ? { opacity: 0 }
  //     : { x: "-100%" }
  // }

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
                key={idRef}
                // variants={FromLeft}
                // layout
                // layoutId={portfolioSections[id].name}
                initial={{ opacity: 0, transition: { duration: 0.1 } }}
                animate={
                  animate === 1
                    ? { opacity: 1, transition: { duration: 0.4 } }
                    : { opacity: 0, transition: { duration: 0.01 } }
                }
                // animate={controls}
                // animate={
                //   laggingIdRef !== idRef ? { opacity: 1 } : { opacity: 0 }
                // }

                transition={{
                  ease: "linear",
                  duration: 3,
                }}

                // initial="hidden"
                // animate={controls}
              >
                {portfolioSections[id].name.toUpperCase()}
              </motion.h1>
              <motion.h1
                id={`portfolioNumberGrid${id}`}
                className="portfolioNumber"
                layout
              >
                {portfolioSections[id].number}
              </motion.h1>
              <motion.p
                layout
                id={`portfolioInfoGrid${id}`}
                className="portfolioInfo"
              >
                {portfolioSections[id].info}
              </motion.p>

              <motion.div
                layout
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
