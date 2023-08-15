import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function KeySkills() {
  // check elements in view hook

  const [ref, inView] = useInView();
  // use animation bolean value

  const controls = useAnimation();
  // key skills variants
  const Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 1.3 },
    },
    hidden: { opacity: 0, x: 40 },
    exit: { opacity: 0, x: 40, transition: { duration: 1.2 } },
  };
  // intialise animation on inview

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  return (
    // key skills container
    <div className="skillsContainer">
      <h1 className="S1">Key Skills</h1>
      <motion.div variants={Variants} initial="hidden" animate={controls}>
        {/* key skills section 2 */}
        <p className="S2">
          Proficient understanding of functional Programming having passed Apple
          and Compare the market coding assessments with a 100% pass rate
        </p>
        {/* key skills section 3 */}

        <p className="S3">
          {" "}
          Large portfolio of proven knowledge of how to build efficient clean
          code
        </p>
        {/* key skills section 4 */}

        <p className="S4" ref={ref}>
          1 years experience of version control systems (GitHub)
        </p>
        {/* key skills section 5 */}

        <p className="S5">
          Over a years experience learning CSS Javascript and React
        </p>
        {/* key skills section 6 */}

        <p className="S6">
          8 months experience using 3D modelling and animation libraries such as
          Framer Motion
        </p>
        {/* key skills section 7 */}

        <p className="S7">
          8 months experience testing and troubleshooting UI/UX
        </p>
        {/* key skills section 8*/}

        <p className="S8">
          1 year experience in web design (Squarespace , Shopify along with CSS
          and CSS libraries such as Tailwind and Bootstrap)
        </p>
        {/* key skills section 10 */}

        <p className="S9">
          Experience hosting websites through Netlify and linking to a personal
          domain
        </p>
      </motion.div>
    </div>
  );
}
