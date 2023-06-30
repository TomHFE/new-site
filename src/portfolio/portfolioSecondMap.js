import Spline from "@splinetool/react-spline";
import React, { useEffect } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PortfolioSecondMap = ({
  el: { id, text, colour, number, title, name, info, video, spline },
  isVisible,
}) => {
  const [ref, inView] = useInView();

  console.log(inView);

  const secondVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
    exit: { opacity: 0, transition: { duration: 1 } },
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

        <motion.h1
          className={`P2Title${id}`}
          ref={ref}
          variants={secondVariants}
          initial="hidden"
          animate={controls}
        >
          {name}
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
            className="P2Spline"
            scene="https://prod.spline.design/SnGWczic6v3sxmsc/scene.splinecode"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};
export default PortfolioSecondMap;

{
  /* <video
  className={`P2Video${id}`}
  src={video}
  controls={false}
  autoPlay
  loop
  muted
  key={id}
/> */
}
