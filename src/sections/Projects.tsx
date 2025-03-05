import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/jdsportsreplica.png",
      projectName: "JD-Sports Clone",
      projectLink: "https://jdsportsreplica-ecommerce.netlify.app/",
      projectDescription:
        "A fully responsive e-commerce website inspired by JD Sports, designed to provide a seamless online shopping experience. This project features dynamic product listings, user authentication, and a shopping cart system. Built with React, Redux, and Firebase, it incorporates modern UI/UX principles to ensure a smooth user journey. The application includes secure payment integration, product filtering, and a wishlist feature, offering a real-world e-commerce experience.",
      projectTech: ["React", "Context Api", "Firebase", "Typescript", "Stripe"],
      projectExternalLinks: {
        github: "https://github.com/polanty/jDsportsClone",
        externalLink: "https://jdsportsreplica-ecommerce.netlify.app/",
      },
    },
    {
      image: "/github.png",
      projectName: "GitHub Profile Finder",
      projectLink: "https://polanty-githubprofilelookup.netlify.app/",
      projectDescription:
        "A GitHub Profile Finder built using Object-Oriented Programming (OOP) principles and the GitHub API to fetch and display user profiles dynamically. This project demonstrates clean architecture, modular design, and API integration, allowing users to search GitHub usernames and view their repositories, followers, and contributions. The UI is intuitive and minimalistic, providing a smooth user experience.",
      projectTech: ["Javascript (ES6+)", "OOP", "Fetch API", "Bootstrap"],
      projectExternalLinks: {
        github: "https://github.com/polanty/GithubProfileFinder",
        externalLink: "https://polanty-githubprofilelookup.netlify.app/",
      },
    },
    {
      image: "/Travelagency.png",
      projectName: "Beautiful Travel Agency Website",
      projectLink: "https://natours-adaptation.vercel.app/",
      projectDescription:
        "A visually appealing travel agency website designed with Sass for modular, maintainable, and scalable CSS. The website showcases breathtaking travel destinations, detailed tour packages, and customer testimonials with an elegant and engaging layout. It follows modern web design trends, featuring smooth animations, parallax effects, and a fully responsive design.",
      projectTech: ["HTML", "CSS", "Sass (SCSS)", "Animations"],
      projectExternalLinks: {
        github: "https://github.com/polanty/Natours",
        externalLink: "https://natours-adaptation.vercel.app/",
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
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
