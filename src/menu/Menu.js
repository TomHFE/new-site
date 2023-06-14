import "./Menu.css";
import { useState, useEffect, useRef } from "react";

const Menu = () => {
  const [array, setArray] = useState([
    "About",
    "Homepage",
    "Portfolio",
    "Contact",
    "CV",
  ]);
  const rotationAmount = -1;

  const rotateArray = () => {
    const rotatedArray = [
      ...array.slice(rotationAmount),
      ...array.slice(0, rotationAmount),
    ];
    setArray(rotatedArray);
  };

  return (
    <div className="menuBody">
      <h1 onCLick={rotateArray}>hello world</h1>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
