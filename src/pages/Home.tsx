import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import SectionDivider from "../components/SectionDivider";
import Skills from "../components/Skills";
import ThemeSwitch from "../components/ThemeSwitch";

const Page = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <ThemeSwitch />
    </main>
  );
};

export default Page;
