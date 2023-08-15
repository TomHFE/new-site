import Spline from "@splinetool/react-spline";
import React, { useEffect } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PortfolioSecondMap = ({
  el: { id, text, colour, number, name, info, link },
}) => {
  // inview hook
  const [ref, inView] = useInView();
  // variants for secondary portfolio
  const secondVariants = {
    visible: {
      opacity: 1,
      transition: { type: "spring", duration: 1.3 },
    },
    hidden: { opacity: 0 },
    exit: { opacity: 0, transition: { duration: 1.3 } },
  };
  // animation controls
  const controls = useAnimation();
  // check for inview use effect hook
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      {/* portoflio secondary grid */}
      <motion.div
        key={id}
        className={`P2Grid${id}`}
        style={{
          color: text,
          backgroundColor: colour,
        }}
      >
        {/* number */}
        <motion.h1
          className={`P2Number${id}`}
          variants={secondVariants}
          initial="hidden"
          animate={controls}
        >
          {number}
        </motion.h1>
        {/* portoflio click title paragraph */}
        <motion.p
          className={`P2Click${id}`}
          variants={secondVariants}
          initial="hidden"
          animate={controls}
        >
          CLICK THE TITLE TO FIND OUT MORE
        </motion.p>
        {/* ref */}
        <h1 className="P2Ref" ref={ref}>
          hello
        </h1>
        {/* title */}
        <motion.h1
          className={`P2Title${id}`}
          ref={ref}
          variants={secondVariants}
          initial="hidden"
          animate={controls}
        >
          <a
            className="aTag"
            style={{ zIndex: 101, textDecoration: "none", color: "inherit" }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </motion.h1>
        {/* info */}
        <motion.p
          className={`P2Info${id}`}
          variants={secondVariants}
          initial="hidden"
          animate={controls}
        >
          {info}
        </motion.p>
        {/* spline component */}
        {inView && (
          <Spline
            key={id}
            className="P2Spline"
            scene="https://prod.spline.design/SnGWczic6v3sxmsc/scene.splinecode"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};
export default PortfolioSecondMap;
