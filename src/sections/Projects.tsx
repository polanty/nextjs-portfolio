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
      image: "/EgoBank.PNG",
      projectName: "EgoBank",
      projectLink: "https://my-bank-app-pi.vercel.app/",
      projectDescription:
        "A modern banking web app designed with a focus on user experience and security. This project showcases a clean, responsive design with intuitive navigation and robust functionality. Built with React and TypeScript, it incorporates best practices for performance and maintainability. The site includes features like account management, transaction history, and secure login.",
      projectTech: [
        "Next.js 14+",
        "React.js",
        "Redux Toolkit",
        "RTK Query",
        "Tailwind CSS",
        "Firebase",
      ],
      projectExternalLinks: {
        github: "https://github.com/polanty/My-Bank-App",
        externalLink: "https://my-bank-app-pi.vercel.app/",
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
