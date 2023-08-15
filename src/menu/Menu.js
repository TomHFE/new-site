import "./Menu.css";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import menuHoverAnimation from "./pngs/menuHover.png";
import { Link } from "react-router-dom";
import EmailLink from "../contact/email";
import Exit from "../exit-animation/Exit";
import useScrollBlock from "../hooks/useScrollBlock";

const Menu = () => {
  // intial Array

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

  // scroll hook

  const [scroll, setScroll] = useState(0);

  // menu hover hook
  const [menuHover, setMenuHover] = useState(0);

  // initial animation hook

  const [show, setShow] = useState(false);

  // roatation variable
  const rotationAmount = 1;

  // custom block scroll hook

  const [blockScroll, allowScroll] = useScrollBlock();

  // intial animation timer

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleShow();
    }, 950);

    return () => {
      // Clean up the timeout if the component unmounts or the effect changes
      clearTimeout(timeout);
    };
  }, []);

  // scroll intialiser when scroll state changes

  useEffect(() => {
    if (scroll > 0) {
      // User scrolled down

      rotateArray(rotationAmount);
    } else if (scroll < 0) {
      // User scrolled up
      rotateArray(-rotationAmount);
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  // menu rotation function

  const rotateArray = (amount) => {
    const rotatedArray = [...array.slice(amount), ...array.slice(0, amount)];
    setArray(rotatedArray);
  };

  // menu hover in function

  const handleMenuIn = () => {
    setMenuHover(true);
  };

  // menu hover out function

  const handleMenuOut = () => {
    const timeoutMenu = setTimeout(() => {
      setMenuHover(false);
    }, 80);

    return () => {
      // Clean up the timeout if the component unmounts or the effect changes
      clearTimeout(timeoutMenu);
    };
  };

  // intial animation and dom rendering function

  const handleShow = () => {
    setShow(true);
  };

  // variants for number animation on hover

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
  };

  // variants for slider animation on hover

  const menuHoverAnimations = {
    start: {
      position: "absolute",
      display: "none",
      scale: 0.5,
      y: "-110%",
      transition: {
        duration: 0.2, // Transition duration for other properties
        y: { duration: 0.5 }, // Transition duration for the 'y' property
      },
    },

    middle: {
      display: "block",
      scale: 0.5,

      y: "60%",
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

  // variants for name animation on hover

  const name = {
    start: { fontSize: "2rem" },

    middle: { fontSize: "0rem" },
  };

  // intial aniation variants

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

  // intial menu animation variants

  const liVariants = {
    up: { y: -100 },
    down: { y: 100 },
    visible: { y: 0 },
  };

  return (
    <AnimatePresence>
      {/* menu */}
      {show ? (
        <motion.div className="menuBody" onLoad={blockScroll}>
          <div className="menuBody">
            {/* list of menu array */}
            <motion.ul
              className="menuBox"
              variants={intro}
              initial="hidden"
              animate={show && "visible"}
              exit="exit"
              key="menuUl"
            >
              {/* button to move forward */}
              <span
                className="dot forward"
                onMouseDown={() => {
                  setScroll(-1);
                }}
                onMouseUp={() => {
                  setScroll(0);
                }}
              ></span>

              {/* menu array position 0 */}

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

              {/* menu array position 1 */}

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

              {/* active menu section */}

              <motion.li
                className="menu3"
                onHoverStart={handleMenuIn}
                onHoverEnd={handleMenuOut}
                variants={liVariants}
                initial={liVariants.up}
                animate={liVariants.visible}
                transition={{ duration: 3 }}
                key={array[2].number}
                style={{ overflow: "hidden" }}
              >
                {/* link to other pages */}

                <Link
                  to={
                    array[2].name !== "CONTACT"
                      ? `/${array[2].name.toLowerCase()}`
                      : EmailLink()
                  }
                  className="linkStyling"
                >
                  {/* number */}
                  <motion.span
                    variants={numbers}
                    initial="start"
                    animate={menuHover ? "middle" : "start"}
                    transition={{ duration: 0.3 }}
                    onClick={allowScroll}
                  >
                    {array[2].number}
                  </motion.span>{" "}
                </Link>
                {/* slider animation */}

                <motion.img
                  className="menuAnimation"
                  src={menuHoverAnimation}
                  alt="menuHoverAnimation"
                  variants={menuHoverAnimations}
                  initial="start"
                  animate={menuHover ? "middle" : "start"}
                  transition={{ duration: 0.3 }}
                />
                {/* name */}
                <motion.span
                  variants={name}
                  initial="start"
                  animate={menuHover ? "middle" : "start"}
                  transition={{ duration: 0.3 }}
                >
                  {array[2].name}
                </motion.span>
              </motion.li>

              {/* active menu section end */}
              {/* menu array position 3 */}

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
              {/* menu array position 4 */}

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
              {/* button to move back */}

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
          {/* intial animation */}
          <Exit />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Menu;
