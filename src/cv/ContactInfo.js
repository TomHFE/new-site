import { motion } from "framer-motion";
import FromLeft from "../framer-variants/Left";
import FromRight from "../framer-variants/Right";

export default function ContactInfo() {
  return (
    // contact container
    <motion.div
      className="headerContainer"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* name */}
      <motion.h1
        className="H1"
        variants={FromLeft}
        initial="hidden"
        animate="visible"
      >
        Tom England
      </motion.h1>
      <motion.h2
        className="H2"
        variants={FromLeft}
        initial="hidden"
        animate="visible"
      >
        {/* tagline */}
        Determined, enthusiastic individual with over a year and a half
        experience in web development including HTML CSS Javascript and React,
        including 4 months experience with Hyperion Dev bootcamp.
      </motion.h2>
      {/* contact details */}
      <motion.div className="H3" variants={FromRight}>
        <h2>Contact details</h2>
        <h2>Email</h2>
        <p>tomengland1995@gmail.com</p>
        <h2>Git</h2>
        <a href="https://github.com/TomHFE" target="_blank" rel=" noreferrer">
          https://github.com/TomHFE
        </a>
      </motion.div>
    </motion.div>
  );
}
