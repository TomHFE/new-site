import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function PreviousWork() {
  // check elements in view hook

  const [ref, inView] = useInView();
  // use animation bolean value

  const controls = useAnimation();
  // previous work variants
  const Variants = {
    visible: {
      opacity: 1,

      transition: { type: "spring", duration: 4 },
    },
    hidden: { opacity: 0 },
    exit: { opacity: 0, transition: { duration: 4 } },
  };
  // intialise animation on inview

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);
  // experience section  render function
  const experience = (title, company, date, synopsis) => {
    return (
      <motion.div className="workPreviousLayout">
        <motion.h2>{title}</motion.h2>
        <motion.p>{company}</motion.p>
        <motion.p>{date}</motion.p>
        <motion.p>{synopsis}</motion.p>
      </motion.div>
    );
  };
  // first section
  let first = experience(
    "Construction",
    "Scutts Renovations | Dulwich Fires and Stoves - London",
    "June 2019 Present",
    "Working to deadlines, learning on the job, problem solving, strong attention to detail, logical mind-set, organising projects, website design and management"
  );
  // second section

  let second = experience(
    "Presiding Officer",
    "Medway Council - London",
    "May 2019 Present",
    "Supervising polling stations and staff, ensuring secrecy of elections and accuracy of ballot paper account, data entry, liaison with voters, the council and local police"
  );
  // third section

  let third = experience(
    "Stock Manager",
    "One Circle - London",
    "July 2019- July 2020",
    "Supervising Stock at various festivals, data entry, strong organisational awareness, working under pressure, Problem Solving, Professionalism "
  );
  // fourth section

  let fourth = experience(
    "Hospitality (Japan) ",
    "Kabuki 1-2 - Niseko",
    "December 2018 April 2019",
    "Hospitality coordinator within a high level resort, Responsible for cashing up at end of day, Experience working in a culturally diverse environment, focus on handling the needs of clients  "
  );
  // fifth section

  let fifth = experience(
    "Supervisor    ",
    "The Hare and Billet – London",
    "January 2018 to May 2018",
    "Looking after clients, managing a team, dealing with complaints, sorting out bookings, cashing up at end of day, relaying and building a rapport with head office "
  );
  // sixth section

  let sixth = experience(
    "Waiting and Bartending    ",
    `The Station – London | \n The Pelton arms – London | 
\n   Lucky Beach – Brighton 
`,
    "December 2016 - January 2018",
    "Managing bookings, dealing with clients’ needs and problems, working under pressure in a busy venue, cashing up, organisation"
  );
  // seventh section

  let seventh = experience(
    "Chef de Partie     ",
    "Grand Central - Brighton    ",
    "June 2015 to September 2016",
    "Looking after clients, managing a team, dealing with complaints, sorting out bookings, cashing up at end of day, relaying and building a rapport with head office "
  );

  return (
    <div>
      {/* work container */}
      <motion.div
        variants={Variants}
        initial="hidden"
        animate={controls}
        classname="workContainer"
        ref={ref}
      >
        {/* title */}
        <motion.h1 className="P1">Previous Work</motion.h1>
        {/* first section */}

        <motion.div className="P2">{first}</motion.div>
        {/* second section */}

        <motion.div className="P3">{second}</motion.div>
        {/* third section */}

        <motion.div className="P4">{third}</motion.div>
        {/* fourth section */}

        <motion.div className="P5">{fourth}</motion.div>
        {/* fifth section */}

        <motion.div className="P6">{fifth}</motion.div>
        {/* sixth section */}

        <motion.div className="P7">{sixth}</motion.div>
        {/* seventh section */}

        <motion.div className="P8">{seventh}</motion.div>
      </motion.div>
    </div>
  );
}
