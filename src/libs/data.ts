import React from "react";
import { FaAngular, FaReact } from "react-icons/fa";
import blogsImg from "/blogs.webp";
import dashboardImg from "/dashboard.webp";
import marketPlaceImg from "/marketPlace.webp";
import f1soft from "/f1soft_logo.jpeg";
import logicabeans from "/logicabeans_logo.jpeg";

import devFinder from "/devfinder.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Associate Software Engineer",
    company: "F1Soft International",
    logo: f1soft,
    location: "Lalitpur, Nepal",
    description:
      "Developing modular Angular components, custom directives, and shared modules using TypeScript and RxJS to ensure accessibility, performance, and reduced UI duplication.",
    icon: React.createElement(FaAngular),
    date: "Mar 2025 - Present",
  },
  {
    title: "Associate Software Engineer",
    company: "Logicabeans",
    logo: logicabeans,
    location: "Kathmandu, Nepal",
    description:
      "Engineered responsive React applications, integrated Firebase for push notifications, and implemented Redux/Context API to cut data inconsistencies by 50%.",
    icon: React.createElement(FaReact),
    date: "Apr 2024 - Feb 2025",
  },

  {
    title: "Intern (React.js)",
    company: "Logicabeans",
    logo: logicabeans,
    location: "Kathmandu, Nepal",
    description:
      "Built reusable React components, optimized performance, and integrated RESTful APIs to deliver dynamic, scalable user interfaces.",
    icon: React.createElement(FaReact),
    date: "Feb 2024 - Apr 2024",
  },
] as const;

export const projectsData = [
  {
    title: "React Dashboard",
    description:
      "A dynamic and user-friendly web dashboard with data visualization using charts. It has features like pagination, filter and sorting.",
    tags: ["React", "React Query", "Supabase", "Styled Components", "Rechart"],
    imageUrl: dashboardImg,
    link: "https://dashboardify-react.vercel.app/dashboard",
  },
  {
    title: "House Marketplace",
    description:
      "Seamlessly connect buyers and sellers with this modern web platform. Explore stunning listings powered by Firebase, and a sleek user interface crafted with Tailwind.",
    tags: ["React", "Firebase", "Tailwind", "React Leaflet", "Geocoding Api"],
    imageUrl: marketPlaceImg,
    link: "https://house-marketlace.netlify.app",
  },
  {
    title: "React Blog",
    description:
      "Explore a user-friendly blog built using Redux and TypeScript. This project offers CURD operations and utilized dummy API to provide dynamic content.",
    tags: ["React", "Redux", "Typescript", "Tailwind"],
    imageUrl: blogsImg,
    link: "https://react-redux-with-typescript.netlify.app",
  },
  {
    title: "Dev Finder",
    description:
      "This web application leverages the GitHub API to help you explore developers profile, repositories, and contributions, all presented with an intuitive and stylish user interface designed with Tailwind CSS.",
    tags: ["React", "Github Api", "Tailwind"],
    imageUrl: devFinder,
    link: "https://devsfinder.netlify.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Rechart",
  "Firebase",
  "Framer Motion",
  "Prisma",
  "MongoDB",
  "Angular",
] as const;
