// import Spline from "@splinetool/react-spline";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import React, { lazy } from "react";
import FromLeft from "../framer-variants/Left";

const Spline = lazy(() => import("@splinetool/react-spline"));

const Main = () => {
  const [loaded, setLoaded] = useState(false);

  const name = "TOM ENGLAND";

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleLoaded();
    }, 9500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleLoaded = () => {
    setLoaded(true);
  };

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,

      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "linear",
        duration: 1,
      },
    },
  };

  // "A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received"

  return (
    <div>
      <Loading key="loading" />
      <div className="mainBorder">
        <div className="mainBody">
          <Spline
            id="main"
            scene="https://prod.spline.design/9oEZU4K8ZLhSfF2h/scene.splinecode"

            // add this as an aync await once loaded use usestate to add it in until that happens have a usestate for loading which renders another file until false
          />
          <motion.div className="mainTitle">
            <motion.h1
              variants={sentence}
              initial="hidden"
              animate={loaded ? "visible" : "hidden"}
            >
              {name.split("").map((char, index) => {
                return (
                  <motion.span
                    style={{ display: "inline-block" }}
                    key={char + "-" + index}
                    variants={letter}
                  >
                    {char}
                  </motion.span>
                );
              })}{" "}
            </motion.h1>
          </motion.div>
          <motion.h2
            variants={FromLeft}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            className="mainSubHeading"
          >
            {" "}
            Web Developer
          </motion.h2>
          <motion.p
            variants={FromLeft}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            className="mainParagraph"
          >
            Looking for a position in front end development and software
            engineering
          </motion.p>
          {/* use variants to change background from white to clear and change font from see through to white then work out correct transiition for desired effect */}
          <Link className="menuSign" to="/menu">
            <h1>MENU</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
