import cv from "./portfolio-vids/cv.mov";
import movieApp from "./portfolio-vids/movie-app.mov";
import hangman from "./portfolio-vids/hangman.mov";

const PortfolioSections = [
  // new website
  {
    id: 0,
    title: "newWebsite",
    number: ".001",
    name: "My Website",
    info: "My most recent website! This website was built with 3D animation software Spline for the homepage, along with Framer motion to handle animations and transitions. It also has React Router to handle page changes and React Javascript and CSS as the languages to build the UI/UX",
    video: "",
    colour: "",
    text: "white",
    link: "",
  },
  // final project HD
  {
    id: 1,
    title: "hyperionFinalProject",
    number: ".002",
    name: "Final HD Project",
    info: "My final project with Hyperion Development. This game fetched data from a movie API. The data was then converted into an array of blank letters which would then be updated depending on if the user managed to pick the correct letters. The site also stored highscore, number of lives and gave corresponding clues depending on how many lives where remaining, through fetching data from the API. Feel free to give it a try by clicking the link above and downloading the file from my Github!",
    video: hangman,
    colour: "##cfceca",
    text: "white",
    link: "https://github.com/TomHFE/hangman-app",
  },
  // hyperion projects
  {
    id: 2,
    title: "hyperionProjects",
    number: ".003",
    name: "Hyperion Development",
    info: "Here you can find a list of all my projects and their grades. Follow the link above to find out more.",
    video: "",
    colour: "##f8f8ff",
    text: "white",
    link: "https://www.hyperiondev.com/portfolio/104617/",
  },
  // css cv
  {
    id: 3,

    title: "cssCv",
    number: ".004",
    name: "CSS CV",
    info: "Heres an exampe I made of my understanding of CSS and grid more specifically. This online CV was built with React and has the various components of a CV built through nested Grid layouts.",
    video: cv,
    colour: "##c9a959",
    text: "white",
    link: "https://github.com/TomHFE/CV-react",
  },
  // movie app
  {
    id: 4,

    title: "movieApp",
    number: ".005",
    name: "Movie App",
    info: "My first App!. This site uses fetch to pull data from a movie API depending on the users input. It also has React Router to handle page changes along with error boundaries, redirecting and Framer Motion for animation. This site was built with React, Javascript and CSS.",
    video: movieApp,
    colour: "##253d58",
    text: "white",
    link: "https://github.com/TomHFE/movie-app",
  },
];

export default PortfolioSections;
