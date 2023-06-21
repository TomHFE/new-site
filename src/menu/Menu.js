import "./Menu.css";
import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { AnimatePresence, motion } from "framer-motion";
import menuHoverAnimation from "./pngs/menu-hover.png";
import { Link } from "react-router-dom";

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
  // const [menuClick, setMenuClick] = useState(0);
  const rotationAmount = 1;
  const debouncedValue = useDebounce(scroll, 15);

  useEffect(() => {
    // debounce(() => {
    if (debouncedValue > 0) {
      // User scrolled down

      rotateArray(rotationAmount);
    } else if (debouncedValue < 0) {
      // User scrolled up
      rotateArray(-rotationAmount);
    } else {
      return;
    }
  }, [debouncedValue]);

  const rotateArray = (amount) => {
    const rotatedArray = [...array.slice(amount), ...array.slice(0, amount)];
    setArray(rotatedArray);
  };

  const handleMenuHover = () => {
    setMenuHover(!menuHover);
  };
  // const handleMenuClick = () => {
  //   setMenuClick(!menuClick);
  // };
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
      // zIndex: 3,
      // scale: 0.9,
      // marginLeft: "auto",
      // marginRight: "auto",
      y: "-100%",
      transition: {
        duration: 0.2, // Transition duration for other properties
        y: { duration: 0.5 }, // Transition duration for the 'y' property
      },
    },

    middle: {
      // zIndex: 3,
      // position: "center",
      display: "block",
      // marginLeft: "auto",
      // marginRight: "auto",
      y: "120%",
      transition: {
        duration: 0.2, // Transition duration for other properties
        y: { duration: 0.4 }, // Transition duration for the 'y' property
      },
    },

    end: {
      display: "none",
      // zIndex: 3,
      // position: "absolute",
      // scale: 0.9,
      // marginLeft: "auto",
      // marginRight: "auto",

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

  return (
    <body
      className="menuBody"
      onKeyDown={(e) => {
        console.log(e);
      }}
      onWheel={(e) => {
        console.log(e);
        setScroll(e.deltaY);
      }}
    >
      <div>
        <ul className="menuBox">
          <span
            className="dot forward"
            onMouseDown={() => {
              setScroll(1);
            }}
            onMouseUp={() => {
              setScroll(0);
            }}
          ></span>
          <li className="menu1">{[array[0].number, " ", array[0].name]}</li>
          <li className="menu2">{[array[1].number, " ", array[1].name]}</li>
          {/* {!menuClick ? ( */}
          <motion.li
            className="menu3"
            onHoverStart={handleMenuHover}
            onHoverEnd={handleMenuHover}
            // onClick={handleMenuClick}
          >
            <Link
              to={`/${array[2].name.toLowerCase()}`}
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

          <li className="menu4">{[array[3].number, " ", array[3].name]}</li>
          <li className="menu5">{[array[4].number, " ", array[4].name]}</li>
          <span
            className="dot back"
            onMouseDown={() => {
              setScroll(-1);
            }}
            onMouseUp={() => {
              setScroll(0);
            }}
          ></span>
        </ul>
      </div>
    </body>
  );
};
export default Menu;
