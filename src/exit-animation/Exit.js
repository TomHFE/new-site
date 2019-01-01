import { motion } from "framer-motion";
import ExitAnimationVariants from "../framer-variants/ExitAnimation";

const Exit = () => {
  return (
    <div>
      <motion.div
        style={{
          height: "20vh",
          width: "100vw",
          backgroundColor: "white",
          position: "absolute",
          zIndex: "100000000",
          margin: "0",
          top: 0,
          left: 0,
        }}
        variants={ExitAnimationVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 4.3, type: "easeOut" }}
      ></motion.div>
    </div>
    // add set timeout conditionally render once done
  );
};
export default Exit;
