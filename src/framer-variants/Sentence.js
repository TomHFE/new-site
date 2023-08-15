const Sentence = {
  // sentence animation to be used with letter animation as parent container
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,

    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
export default Sentence;
