import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/jdsportsreplica.png",
      projectName: "Apparels Web app based on JD Sports",
      projectLink: "https://j-dsports-clone.vercel.app/",
      projectDescription:
        "A fully responsive e-commerce website inspired by JD Sports, designed to provide a seamless online shopping experience. This project features dynamic product listings, user authentication, and a shopping cart system. Built with React, Redux, and Firebase, it incorporates modern UI/UX principles to ensure a smooth user journey. The application includes secure payment integration, product filtering, and a wishlist feature, offering a real-world e-commerce experience.",
      projectTech: ["React", "Context Api", "Firebase", "Typescript", "Stripe"],
      projectExternalLinks: {
        github: "https://github.com/polanty/jDsportsClone",
        externalLink: "https://j-dsports-clone.vercel.app/",
      },
    },
    {
      image: "/prepwise.png",
      projectName: "Prepwise",
      projectLink: "https://www.prepwise.live/",
      projectDescription:
        "PrepWise is an intelligent interview preparation platform that helps job seekers practice and improve their interview skills through AI-driven coaching, real-time speech analysis, and realistic mock interview simulations with a video avatar interviewer.",
      projectTech: [
        "Tailwind CSS",
        "Next.js",
        "Open AI API",
        "Smile API",
        "ai",
        "jsonwebtoken",
      ],
      projectExternalLinks: {
        github: "https://github.com/polanty/Prepwise",
        externalLink: "https://www.prepwise.live/",
      },
    },
    {
      image: "/Voyage.png",
      projectName: "Voyage Apartments",
      projectLink: "https://voyage.apartments/",
      projectDescription:
        "A scalable, multi-region hotel search and booking web application built with the MERN stack (MongoDB, Express, React, Node.js). PolantyHotels aggregates partnered multinational hotel brands and provides a seamless booking experience for customers while offering comprehensive admin and regional management tools.",
      projectTech: [
        "React.js",
        "React Router",
        "mapbox-gl",
        "axios",
        "bycrypt",
        "jest",
        "mongoose",
        "express",
        "node.js",
        "MongoDB",
        "multer",
        "nodeMailer",
        "React Three Drei",
      ],
      projectExternalLinks: {
        github: "https://github.com/polanty/PolantyHotels",
        externalLink: "https://voyage.apartments/",
      },
    },
    {
      image: "/Egobank.png",
      projectName: "Ego Bank",
      projectLink: "https://www.egobank.dev/",
      projectDescription:
        "A TypeScript Next.js App Router web application that implements a small, fully functional demo bank (user sign-up/sign-in, user profiles, personal/business pages, and money transfers). It’s a frontend-first full-stack demo that uses Firebase for auth/back-end integration and Redux Toolkit (RTK Query) to model API/transfer flows — intended for developers or as a demo product for end users.",
      projectTech: [
        "Redux Toolkit",
        "bootstrap",
        "firebase",
        "jspdf",
        "pdf-lib",
        "zod",
        "next",
        "GSAP",
        "React-redux",
      ],
      projectExternalLinks: {
        github: "https://github.com/polanty/My-Bank-App",
        externalLink: "https://www.egobank.dev/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          },
        )}
      </div>
    </div>
  );
}

export default Projects;
