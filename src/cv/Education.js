import React, { useEffect } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Education() {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const VariantsFirst = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 1.3 },
    },
    hidden: { opacity: 0, x: -40 },
    exit: { opacity: 0, x: -40, transition: { duration: 1.2 } },
  };
  const VariantsSecond = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 1.3 },
    },
    hidden: { opacity: 0, x: 40 },
    exit: { opacity: 0, x: 40, transition: { duration: 1.2 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  return (
    <div className="educationContianer">
      <h1 className="Ed1">Education</h1>
      <motion.div
        className="Ed2"
        variants={VariantsFirst}
        initial="hidden"
        animate={controls}
      >
        <h2>University of Brighton 2015 - 2018</h2>
        <p>BA Hons Sociology and Politics</p>
        <h2 ref={ref}>Overall grade: 2:1</h2>
        <p>With a 1st in my dissertation</p>
      </motion.div>
      <motion.div
        className="Ed3"
        variants={VariantsSecond}
        initial="hidden"
        animate={controls}
      >
        <h2> Thomas Tallis </h2>
        <h2> 2011-2013 A Levels</h2>

        <p>3 A levels and an As</p>
        <h2>Thomas Tallis</h2>
        <h2>2009-2011 GCSE</h2>

        <p>10 A-C GCSE’s including math science and English</p>
      </motion.div>
    </div>
  );
}
