import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import useSectionInView from "../libs/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[28rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 text-justify">
        As a <span className="font-medium">Frontend Developer</span>, I
        specialize in building responsive, high-performance applications using{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, and Angular
        </span>
        .
        <span className="italic">
          {" "}
          My favorite part of programming is the problem-solving aspect—I enjoy
          the challenge of turning complex requirements into elegant, scalable
          solutions.
        </span>{" "}
        I have hands-on experience with{" "}
        <span className="font-medium">
          Redux Toolkit, Tailwind CSS, Firebase, and modern UI libraries
        </span>
        , with a strong focus on performance and accessibility.
      </p>
    </motion.section>
  );
};

export default About;
