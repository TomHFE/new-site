import "./Menu.css";
import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { AnimatePresence, motion } from "framer-motion";
import menuHoverAnimation from "./pngs/menuHover.png";
import { Link } from "react-router-dom";
import EmailLink from "../contact/email";
import Exit from "../exit-animation/Exit";
import ExitAnimationVariants from "../framer-variants/ExitAnimation";

const Menu = () => {
  const [array, setArray] = useState([
    {
      name: "ABOUT",
      number: ".001",
    },
    {
      name: "HOMEPAGE",
      number: ".002",
    },
    {
      name: "PORTFOLIO",
      number: ".003",
    },
    {
      name: "CONTACT",
      number: ".004",
    },
    {
      name: "CV",
      number: ".005",
    },
  ]);
  const [scroll, setScroll] = useState(0);
  const [menuHover, setMenuHover] = useState(0);
  const [show, setShow] = useState(false);
  const rotationAmount = 1;
  const scrollValue = useDebounce(scroll, 15);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Perform an action after the specified delay
      handleShow();
      console.log("Timeout completed!");
    }, 950); // Delay of 3000 milliseconds (adjust as needed)

    return () => {
      // Clean up the timeout if the component unmounts or the effect changes
      clearTimeout(timeout);
    };
  }, []);
  useEffect(() => {
    // debounce(() => {
    if (scrollValue > 0) {
      // User scrolled down

      rotateArray(rotationAmount);
    } else if (scrollValue < 0) {
      // User scrolled up
      rotateArray(-rotationAmount);
    } else {
      return;
    }
  }, [scrollValue]);

  const rotateArray = (amount) => {
    const rotatedArray = [...array.slice(amount), ...array.slice(0, amount)];
    setArray(rotatedArray);
  };
  // useEffect(() => {
  //   setMenuHover(!hoverValue);
  // }, [menuHover]);

  const handleMenuHover = () => {
    setMenuHover(!menuHover);
  };

  const handleShow = () => {
    setShow(true);
  };

  const numbers = {
    start: {
      fontSize: "2rem",
      background: "none",
      color: "white",
      zIndex: 0,
    },

    middle: {
      marginTop: "5vh",
      fontSize: "3rem",
      background: "none",
      color: "rgb(0, 9, 22)",
      fontWeight: "700",
      zIndex: 0,
    },

    end: {
      fontSize: "2rem",
      background: "none",
      color: "white",
      zIndex: 0,
    },
  };

  const menuHoverAnimations = {
    start: {
      position: "absolute",
      display: "none",

      y: "-100%",
      transition: {
        duration: 0.2, // Transition duration for other properties
        y: { duration: 0.5 }, // Transition duration for the 'y' property
      },
    },

    middle: {
      display: "block",

      y: "120%",
      transition: {
        duration: 0.2, // Transition duration for other properties
        y: { duration: 0.4 }, // Transition duration for the 'y' property
      },
    },

    end: {
      display: "none",

      y: "-100%",
      transition: {
        duration: 0.2, // Transition duration for other properties
        y: { duration: 0.5 }, // Transition duration for the 'y' property
      },
    },
  };

  const name = {
    start: { fontSize: "2rem", scale: 1 },

    middle: { fontSize: "0rem", scale: 0 },

    end: { fontSize: "2rem", scale: 1 },
  };

  const intro = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  const liVariants = {
    up: { y: -100 },
    down: { y: 100 },
    visible: { y: 0 },
  };

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="menuBody"
          onWheel={(e) => {
            setScroll(e.deltaY);
          }}
        >
          <div className="menuBody">
            <motion.ul
              className="menuBox"
              variants={intro}
              initial="hidden"
              animate={show && "visible"}
              exit="exit"
              key="menuUl"
            >
              <span
                className="dot forward"
                onMouseDown={() => {
                  setScroll(-1);
                }}
                onMouseUp={() => {
                  setScroll(0);
                }}
              ></span>
              <motion.li
                className="menu1"
                variants={liVariants}
                initial={liVariants.up}
                animate={liVariants.visible}
                transition={{ duration: 2 }}
                key={array[0].number}
              >
                {[array[0].number, " ", array[0].name]}
              </motion.li>
              <motion.li
                variants={liVariants}
                initial={liVariants.down}
                animate={liVariants.visible}
                transition={{ duration: 2.5 }}
                className="menu2"
                key={array[1].number}
              >
                {[array[1].number, " ", array[1].name]}
              </motion.li>
              <motion.li
                className="menu3"
                onHoverStart={handleMenuHover}
                onHoverEnd={handleMenuHover}
                variants={liVariants}
                initial={liVariants.up}
                animate={liVariants.visible}
                transition={{ duration: 3 }}
                key={array[2].number}
              >
                <Link
                  to={
                    array[2].name !== "CONTACT"
                      ? `/${array[2].name.toLowerCase()}`
                      : EmailLink()
                  }
                  className="linkStyling"
                >
                  <motion.span
                    variants={numbers}
                    initial="start"
                    animate={menuHover ? "middle" : "end"}
                    exit="end"
                    transition={{ duration: 0.3 }}
                  >
                    {array[2].number}{" "}
                  </motion.span>{" "}
                </Link>
                <motion.img
                  className="menuAnimation"
                  src={menuHoverAnimation}
                  alt="menuHoverAnimation"
                  variants={menuHoverAnimations}
                  initial="start"
                  animate={menuHover ? "middle" : "end"}
                  exit="end"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  variants={name}
                  initial="start"
                  animate={menuHover ? "middle" : "end"}
                  exit="end"
                  transition={{ duration: 0.3 }}
                >
                  {array[2].name}
                </motion.span>
              </motion.li>

              <motion.li
                className="menu4"
                variants={liVariants}
                initial={liVariants.down}
                animate={liVariants.visible}
                transition={{ duration: 3.5 }}
                key={array[3].number}
              >
                {[array[3].number, " ", array[3].name]}
              </motion.li>
              <motion.li
                variants={liVariants}
                initial={liVariants.up}
                animate={liVariants.visible}
                transition={{ duration: 4 }}
                className="menu5"
                key={array[4].number}
              >
                {[array[4].number, " ", array[4].name]}
              </motion.li>
              <span
                className="dot back"
                onMouseDown={() => {
                  setScroll(1);
                }}
                onMouseUp={() => {
                  setScroll(0);
                }}
              ></span>
            </motion.ul>
          </div>
        </motion.div>
      ) : (
        <motion.div>
          <Exit />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Menu;
