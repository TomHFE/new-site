// import Spline from "@splinetool/react-spline";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import React, { lazy } from "react";
import FromLeft from "../framer-variants/Left";
const Spline = lazy(() => import("@splinetool/react-spline"));

const Main = () => {
  const ref = useRef(null);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleHeight(ref);
      handleWidth(ref);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleLoaded();
    }, 9500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleHeight = (ref) => {
    setHeight(ref.current.clientHeight);
  };
  const handleWidth = (ref) => {
    setWidth(ref.current.clientWidth);
  };
  const handleLoaded = () => {
    setLoaded(true);
  };

  const maskVariants = {
    hidden: {
      width: `${width}px`,
    },
    visible: {
      width: "0%",
      transition: { duration: 2, type: "easeInOut" },
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
              // onLoad={handleHeight}
              ref={ref}
              style={{ maxHeight: "100%" }}
            >
              TOM ENGLAND
            </motion.h1>
            <motion.div
              variants={maskVariants}
              initial="hidden"
              animate={loaded ? "visible" : "hidden"}
              className="mask"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                zIndex: "5",
                position: "absolute",
                overflow: "hidden",
              }}
            ></motion.div>
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
