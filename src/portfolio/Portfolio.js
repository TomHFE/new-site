import "./Portfolio.css";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Portfolio = () => {
  const [id, setID] = useState(1);

  const idRef = useRef(0);

  const handleID = (id) => {
    idRef.current = id;
    setID(idRef.current);
  };

  const portfolioSections = [
    {
      id: 0,
      title: "newWebsite",
      number: ".001",
      name: "My Website",
      info: "My most recent website! This website was built with 3D animation software Spline for the homepage, along with Framer motion to handle animations and transitions. It also has React Router to handle page changes and React Javascript and CSS as the languages to build the UI/UX",
      video: "",
    },

    {
      id: 1,

      title: "hyperionFinalProject",
      number: ".002",
      name: "Final HD Project",
      info: "My final project with Hyperion Development. This game fetched data from a movie API. The data was then converted into an array of blank letters which would then be updated depending on if the user managed to pick the correct letters. The site also stored highscore, number of lives and gave corresponding clues depending on how many lives where remaining, through fetching data from the API. Feel free to give it a try by clicking the link below and downloading the file from my Github!",
      video: "",
    },

    {
      id: 2,

      title: "hyperionProjects",
      number: ".003",
      name: "Hyperion Development",
      info: "Here you can find a list of all my projects and their grades. Follow the link below to find out more.",
      video: "",
    },

    {
      id: 3,

      title: "cssCv",
      number: ".004",
      name: "CSS CV",
      info: "Heres an exampe I made of my understanding of CSS and grid more specifically. This online CV was built with React and has the various components of a CV built through nested Grid layouts.",
      video: "",
    },

    {
      id: 4,

      title: "movieApp",
      number: ".005",
      name: "Movie App",
      info: "My first App!. This site uses fetch to pull data from a movie API depending on the users input. It also has React Router to handle page changes along with error boundaries, redirecting and Framer Motion for animation. This site was built with React, Javascript and CSS.",
      video: "",
    },
  ];

  const flexVariants = {
    start: {
      flex: 1,
    },

    middle: {
      flex: 28,
    },

    end: {
      flex: 1,
    },
  };
  // make each number have a flex box of one if clicked give it a flex box of 5

  return (
    <AnimatePresence>
      <body className="bodyPortfolio">
        <div className="positionElements">
          {/* {portfolioSections.map((element) => (
          <div key={element.id}>
            <h2
              onMouseDownCapture={() => {
                handleID(element.id);
                console.log(idRef);
              }}
              className="flexNumbers"
              id={`flexBox${id}`}
            >
              {element.number}
            </h2>
          </div>
        ))} */}
          <ul className="flexNumbers">
            <motion.li
              variants={flexVariants}
              initial="start"
              animate={id === 0 ? "middle" : "end"}
              exit="end"
              transition={{ duration: 0.3 }}
              id="flexBox1"
              onMouseDownCapture={() => {
                handleID(portfolioSections[0].id);
                console.log(idRef);
              }}
            >
              {portfolioSections[0].number}
            </motion.li>
            <motion.li
              variants={flexVariants}
              initial="start"
              animate={id === 1 ? "middle" : "end"}
              exit="end"
              transition={{ duration: 0.3 }}
              id="flexBox2"
              onMouseDownCapture={() => {
                handleID(portfolioSections[1].id);
                console.log(idRef);
              }}
            >
              {portfolioSections[1].number}
            </motion.li>
            <motion.li
              variants={flexVariants}
              initial="start"
              animate={id === 2 ? "middle" : "end"}
              exit="end"
              transition={{ duration: 0.3 }}
              id="flexBox3"
              onMouseDownCapture={() => {
                handleID(portfolioSections[2].id);
                console.log(idRef);
              }}
            >
              {portfolioSections[2].number}
            </motion.li>
            <motion.li
              variants={flexVariants}
              initial="start"
              animate={id === 3 ? "middle" : "end"}
              exit="end"
              transition={{ duration: 0.3 }}
              id="flexBox4"
              onMouseDownCapture={() => {
                handleID(portfolioSections[3].id);
                console.log(idRef);
              }}
            >
              {portfolioSections[3].number}
            </motion.li>
            <motion.li
              variants={flexVariants}
              initial="start"
              animate={id === 4 ? "middle" : "end"}
              exit="end"
              transition={{ duration: 0.3 }}
              id="flexBox5"
              onMouseDownCapture={() => {
                handleID(portfolioSections[4].id);
                console.log(idRef);
              }}
            >
              {portfolioSections[4].number}
            </motion.li>
          </ul>
          {idRef && (
            <div className="portfolioGrid">
              <h1 id={`portfolioTitleGrid${id}`} className="portfolioTitle">
                {portfolioSections[id].name.toUpperCase()}
              </h1>
              {/* <h2 className="portfolioNumber">{portfolioSections[id].number}</h2> */}
              {/* maybe use overflow hidden see if it works pafge tabs could be an idea */}
              <p id={`portfolioInfoGrid${id}`} className="portfolioInfo">
                {portfolioSections[id].info}
              </p>
              ;
            </div>
          )}
        </div>
      </body>
    </AnimatePresence>
  );
};
export default Portfolio;
