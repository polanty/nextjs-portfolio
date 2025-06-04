import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Developer",
      role: "React Developer",
      url: "https://github.com/polanty",
      start: "May 2021",
      end: "Present",
      shortDescription: [
        "Collaborated in building UI/frontend components using React.",
        "Developed backend applications with Nest.js and Node.",
        "Ensured high coverage of unit testing with Jest.",
        "Integration Testing",
      ],
    },
    {
      name: "ipublicize.ng",
      role: "Web Developer (Contract)",
      url: "https://ipublicize.ng/",
      start: "May 2023",
      end: "January 2024",
      shortDescription: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      name: "Errandlr",
      role: "Full Stack Developer",
      url: "https://errandlr.com/",
      start: "January 2022",
      end: "December 2022",
      shortDescription: [
        "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others.",
        "I've also co-managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
        "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
      ],
    },
    {
      name: "W.A.A.W Foundation",
      role: "Front-End Developer",
      url: "https://waawfoundation.org/",
      start: "February 2020",
      end: "December 2021",
      shortDescription: [
        "Developed web applications with front-end and back-end functionality, integrating APIs and databases to create seamless user experiences.",
        "Built responsive and user-friendly web applications, ensuring intuitive interfaces that enhance user experience.",
        "Managed multiple projects, gathered requirements, and delivered high-quality solutions, showcasing strong communication and problem-solving skills.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
