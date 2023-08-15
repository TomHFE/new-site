import "./About.css";
import aboutPhoto from "./pngs/aboutPhoto.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense } from "react";

const About = () => {
  // first tag line variants
  const Variants = {
    hidden: {
      opacity: 0,
      y: -75,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "easeInOut", duration: 2 },
    },
  };

  // second tag line variants

  const aboutLineVariantSecond = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "easeInOut", duration: 2 },
    },
  };

  // picture variants

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 2, duration: 2.5 },
    },
  };

  // variants first anchor

  const a1 = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "linear", duration: 2 },
    },
  };

  // variants second anchor

  const a2 = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "linear", duration: 3 },
    },
  };

  // variants third anchor

  const a3 = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "linear", duration: 2 },
    },
  };

  return (
    <AnimatePresence>
      {/* body tag */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* menu link */}
        <Link to="/menu">
          <p id="Menu">MENU</p>
        </Link>
        {/* container for about information */}
        <div className="aboutContainer">
          <div className="aboutGrid">
            <motion.ul className="aboutTagLine">
              {/* first tag line */}
              <motion.li
                className="aboutLine"
                variants={Variants}
                initial="hidden"
                animate="visible"
                style={{ zIndex: "1" }}
              >
                {" "}
                TOM,
              </motion.li>
              <motion.li
                variants={Variants}
                initial="hidden"
                animate="visible"
                className="aboutLine"
              >
                {" "}
                FREELANCE DEVELOPER <span className="mask"></span>
              </motion.li>
              {/* second tag line */}
              <motion.li
                variants={aboutLineVariantSecond}
                initial="hidden"
                animate="visible"
                className="aboutLine"
              >
                WITH A PASSION
              </motion.li>
              <motion.li
                variants={aboutLineVariantSecond}
                initial="hidden"
                animate="visible"
                className="aboutLine"
              >
                FOR CODE
              </motion.li>
            </motion.ul>
            {/* first comments left of photo */}
            <motion.p
              variants={Variants}
              initial="hidden"
              animate="visible"
              className="aboutParagraph1"
            >
              Feel free to add me on LinkedIn
            </motion.p>
            {/* second comments left of photo */}

            <motion.p
              className="aboutParagraph2"
              variants={aboutLineVariantSecond}
              initial="hidden"
              animate="visible"
            >
              {" "}
              or alternatively checkout my Github for better insight into my
              coding journey
            </motion.p>
            {/* about section photo */}
            <Suspense fallback=<div>"loading..."</div>>
              <motion.img
                className="aboutPhoto"
                src={aboutPhoto}
                alt="aboutPhoto"
                variants={container}
                initial="hidden"
                animate="visible"
              />
            </Suspense>
            {/* socials section  */}
            <div className="aboutSocials">
              {/* linkedIn tag */}
              <a
                href="https://www.linkedin.com/in/thomas-logan-england-256b57193/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.p
                  className="a1"
                  variants={a1}
                  initial="hidden"
                  animate="visible"
                >
                  LinkedIn
                </motion.p>
              </a>
              {/* gitHub tag */}

              <a
                href="https://github.com/TomHFE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.p
                  className="a2"
                  variants={a2}
                  initial="hidden"
                  animate="visible"
                >
                  GitHub
                </motion.p>
              </a>
              {/* email tag */}
              <motion.p variants={a3} initial="hidden" animate="visible">
                tomengland1995@gmail.com
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default About;
