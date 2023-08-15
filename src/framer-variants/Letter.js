const Letter = {
  // individual letter easing in animation
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
export default Letter;
