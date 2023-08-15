import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  // check elements in view hook
  const [ref, inView] = useInView();
  // use animation bolean value
  const controls = useAnimation();
  // experience variants
  const Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 1.3 },
    },
    hidden: { opacity: 0, y: 40 },
    exit: { opacity: 0, y: 40, transition: { duration: 1.2 } },
  };
  // intialise animation on inview

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  return (
    <div>
      {/* experience container */}
      <motion.div
        className="experienceContainer"
        variants={Variants}
        initial="hidden"
        animate={controls}
      >
        {/* experience title */}
        <motion.h1 className="E1">Experience</motion.h1>
        {/* experience section 2 */}
        <motion.h2 className="E5">
          Completed a bootcamp with Hyperion Dev coming 6th out of 177
          applicants. Enabling me to be proficient in React, Redux, Javascript
          CSS and HTML.
        </motion.h2>
        {/* experience section 3 */}

        <motion.h2 className="E2" ref={ref}>
          Designed API fetching apps such as a film app which can be found at my
          GitHub, along with various other works. As well as freelance work
          which is available on request.
        </motion.h2>
        {/* experience section 4 */}

        <h2 className="E3">
          Over 100 pieces graded by mentors at Hyperion Dev with a 99% average
          score.
        </h2>
        {/* experience section 5 */}

        <h2 className="E4">
          Developed websites using React as a framework. With responsive user
          interfaces, animation and 3d modelling built in.
        </h2>
      </motion.div>
    </div>
  );
}
