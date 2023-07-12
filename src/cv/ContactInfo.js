import { motion } from "framer-motion";
import FromLeft from "../framer-variants/Left";
import Sentence from "../framer-variants/Sentence";
import Letter from "../framer-variants/Letter";
import FromRight from "../framer-variants/Right";

export default function ContactInfo() {
  const tagLine1 =
    "Determined, enthusiastic individual with over a year and a half experience in web development including HTML CSS";

  const tagLine2 =
    "Javascript and React, including 4 months experience with Hyperion Dev bootcamp.";

  return (
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
        Determined, enthusiastic individual with over a year and a half
        experience in web development including HTML CSS Javascript and React,
        including 4 months experience with Hyperion Dev bootcamp.
      </motion.h2>
      <motion.div className="H3" variants={FromRight}>
        <h2>Contact details</h2>
        <h2>Email</h2>
        <p>tomengland1995@gmail.com</p>
        {/* <h2>Portfolio</h2> */}
        <h2>Git</h2>
        <a href="https://github.com/TomHFE" target="_blank" rel=" noreferrer">
          https://github.com/TomHFE
        </a>
      </motion.div>
    </motion.div>
  );
}

{
  /* Determined, enthusiastic individual with over a year and a half
  experience in web development including HTML CSS Javascript and React,
  including 4 months experience with Hyperion Dev bootcamp. */
}
