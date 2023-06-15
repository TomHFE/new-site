import "./Menu.css";
import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

const Menu = () => {
  const [array, setArray] = useState([
    {
      name: ".001 ABOUT",
      info: "Click here to find out more about me",
    },
    {
      name: ".002 HOMEPAGE",
      info: "Click here to go home",
    },
    {
      name: ".003 PORTFOLIO",
      info: "Click here to have a look at my portfolio",
    },
    {
      name: ".004 CONTACT",
      info: "Click here for contact information",
    },
    {
      name: ".005 CV",
      info: "Click here for a copy of my cv",
    },
  ]);
  const [scroll, setScroll] = useState(0);
  const rotationAmount = 1;
  const debouncedValue = useDebounce(scroll, 15);

  // function debounce(func, delay) {
  //   let timeoutId;
  //   return function (...args) {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => {
  //       func.apply(this, args);
  //     }, delay);
  //   };
  // }
  // const scroll = console.log("hi");

  useEffect(() => {
    // debounce(() => {
    if (debouncedValue > 0) {
      // User scrolled down

      rotateArray(rotationAmount);
    } else {
      // User scrolled up
      rotateArray(-rotationAmount);
    }

    // }, 200);
    // console.log(scroll);
    // document.onWheel = handleScroll;

    // Clean up the event listener
    // return () => {
    //   document.onWheel = null;
    // };
  }, [debouncedValue]);

  const rotateArray = (amount) => {
    const rotatedArray = [...array.slice(amount), ...array.slice(0, amount)];
    setArray(rotatedArray);
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
          <li className="menu1">{array[0].name}</li>
          <li className="menu2">{array[1].name}</li>
          <li className="menu3">{array[2].name}</li>
          <li className="menu4">{array[3].name}</li>
          <li className="menu5">{array[4].name}</li>
        </ul>
      </div>
    </body>
  );
};
export default Menu;
