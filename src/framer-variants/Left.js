const FromLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2, type: "EaseInOut" },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.05, type: "EaseInOut" },
  },
};
export default FromLeft;
