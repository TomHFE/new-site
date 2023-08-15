const FromRight = {
  // ease in from right animation variants

  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2, type: "EaseInOut" },
  },
};
export default FromRight;
