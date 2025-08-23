import img from "/img.webp";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/Hi";
import { FaGithubSquare } from "react-icons/fa";
import useSectionInView from "../libs/hooks";
import { HashLink } from "react-router-hash-link";
import { useActiveSectionContext } from "../context/active-section-context";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActive, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 "
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <img
              src={img}
              alt="photo"
              className="h-24 w-24 border-[0.35rem] border-white rounded-full object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className=" absolute text-2xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.7,
              delay: 0.1,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Sudip.</span> I'm a{" "}
        <span className="font-bold">front-end developer</span> specializing in{" "}
        <span className="underline">React, Next.js, and Angular</span>, with{" "}
        <span className="font-bold">1.5 years</span> of experience building{" "}
        <span className="italic">
          responsive, performance-driven applications.
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <HashLink
          smooth
          to="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all "
          onClick={() => {
            setActive("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </HashLink>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="/CV.pdf"
          download
        >
          Download CV <HiDownload />
        </a>
        <a
          href="https://www.linkedin.com/in/sudip-paudel-a48738192/"
          target="_blank"
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/sudip-paudel"
          target="_blank"
          className="bg-white p-4 flex text-gray-700 text-[1.25rem] text-gary-700 items-center gap-2 rounded-full hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
