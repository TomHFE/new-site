import React, { useEffect } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const secondVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 1.3 },
    },
    hidden: { opacity: 0, y: 40 },
    exit: { opacity: 0, y: 40, transition: { duration: 1.2 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  return (
    <div>
      <motion.div
        className="experienceContainer"
        variants={secondVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 className="E1">Experience</motion.h1>
        <motion.h2 className="E5">
          Completed a bootcamp with Hyperion Dev coming 6th out of 177
          applicants. Enabling me to be proficient in React, Redux, Javascript
          CSS and HTML.
        </motion.h2>
        <motion.h2 className="E2" ref={ref}>
          Designed API fetching apps such as a film app which can be found at my
          GitHub, along with various other works. As well as freelance work
          which is available on request.
        </motion.h2>

        <h2 className="E3">
          Over 100 pieces graded by mentors at Hyperion Dev with a 99% average
          score.
        </h2>
        <h2 className="E4">
          Developed websites using React as a framework. With responsive user
          interfaces, animation and 3d modelling built in.
        </h2>
      </motion.div>
    </div>
  );
}
