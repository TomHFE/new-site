import Spline from "@splinetool/react-spline";
import React, { useEffect } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PortfolioSecondMap = ({
  el: { id, text, colour, number, name, info, link },
}) => {
  const [ref, inView] = useInView();

  const secondVariants = {
    visible: {
      opacity: 1,
      transition: { type: "spring", duration: 1.3 },
    },
    hidden: { opacity: 0 },
    exit: { opacity: 0, transition: { duration: 1.3 } },
  };
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      <motion.div
        key={id}
        className={`P2Grid${id}`}
        style={{
          color: text,
          backgroundColor: colour,
        }}
      >
        <motion.h1
          className={`P2Number${id}`}
          variants={secondVariants}
          initial="hidden"
          animate={controls}
        >
          {number}
        </motion.h1>
        <motion.p
          className={`P2Click${id}`}
          variants={secondVariants}
          initial="hidden"
          animate={controls}
        >
          CLICK THE TITLE TO FIND OUT MORE
        </motion.p>

        <h1 className="P2Ref" ref={ref}>
          hello
        </h1>
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

        <motion.p
          className={`P2Info${id}`}
          variants={secondVariants}
          initial="hidden"
          animate={controls}
        >
          {info}
        </motion.p>
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
