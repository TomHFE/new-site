import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function KeySkills() {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 1.3 },
    },
    hidden: { opacity: 0, x: 40 },
    exit: { opacity: 0, x: 40, transition: { duration: 1.2 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  return (
    <div className="skillsContainer">
      <h1 className="S1">Key Skills</h1>
      <motion.div variants={Variants} initial="hidden" animate={controls}>
        <p className="S2">
          Proficient understanding of functional Programming having passed Apple
          and Compare the market coding assessments with a 100% pass rate
        </p>
        <p className="S3">
          {" "}
          Large portfolio of proven knowledge of how to build efficient clean
          code
        </p>
        <p className="S4" ref={ref}>
          1 years experience of version control systems (GitHub)
        </p>

        <p className="S5">
          Over a years experience learning CSS Javascript and React
        </p>

        <p className="S6">
          8 months experience using 3D modelling and animation libraries such as
          Framer Motion
        </p>

        <p className="S7">
          8 months experience testing and troubleshooting UI/UX
        </p>

        <p className="S8">
          1 year experience in web design (Squarespace , Shopify along with CSS
          and CSS libraries such as Tailwind and Bootstrap)
        </p>

        <p className="S9">
          Experience hosting websites through Netlify and linking to a personal
          domain
        </p>
      </motion.div>
    </div>
  );
}
