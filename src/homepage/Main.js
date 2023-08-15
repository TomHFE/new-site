import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React, { lazy } from "react";
import FromLeft from "../framer-variants/Left";
import Letter from "../framer-variants/Letter";
import Sentence from "../framer-variants/Sentence";

const Spline = lazy(() => import("@splinetool/react-spline"));

const Main = () => {
  // set loaded hook
  const [loaded, setLoaded] = useState(false);
  // name vairable for animation
  const name = "TOM ENGLAND";
  // timeout finction for when loaded
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleLoaded();
    }, 9500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  // loading function
  const handleLoaded = () => {
    setLoaded(true);
  };

  return (
    <div>
      {/* loading component */}
      <Loading key="loading" />
      {/* homapage container  */}
      <div className="mainBorder">
        <div className="mainBody">
          {/* 3d animation */}
          <Spline
            id="main"
            scene="https://prod.spline.design/9oEZU4K8ZLhSfF2h/scene.splinecode"
          />
          {/* text body */}
          <motion.div className="mainTitle">
            {/* name and corresponding animation */}
            <motion.h1
              variants={Sentence}
              initial="hidden"
              animate={loaded ? "visible" : "hidden"}
            >
              {/* letter animation */}
              {name.split("").map((char, index) => {
                return (
                  <motion.span
                    style={{ display: "inline-block" }}
                    key={char + "-" + index}
                    variants={Letter}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                );
              })}{" "}
            </motion.h1>
          </motion.div>
          {/* sub heading */}
          <motion.h2
            variants={FromLeft}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            className="mainSubHeading"
          >
            {" "}
            Web Developer
          </motion.h2>
          {/* homepage tag line */}
          <motion.p
            variants={FromLeft}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            className="mainParagraph"
          >
            Looking for a position in front end development and software
            engineering
          </motion.p>
          {/* menu button */}
          <Link className="menuSign" to="/menu">
            <h1>MENU</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
