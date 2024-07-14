import React from "react";
import "./MyProject.css";
import { BsGithub } from "react-icons/bs";
import { SiDarkreader } from "react-icons/si";
import kbytes from "../../assets/k-bytes.png";
import portfolio from "../../assets/potfolio.png";
import githubApi from "../../assets/github-api.png";
import speedtest from "../../assets/speedtest.png";

const initialProjects = [
  {
    image: kbytes,
    title: "Sahoo-blog | The blog App",
    description:
      "A full stack web application using MERN stack for blogging. Implemented user authentication, CRUD operations for posts, and responsive UI design.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "https://example.com/sahoo-blog",
    githubUrl: "https://github.com/sahoo-blog",
    madeAt: "Personal",
  },
  {
    image: portfolio,
    title: "Sahoo | Portfolio website",
    description:
      "A personal portfolio showcasing my projects and skills. Built with React, it features a responsive design, project sections, and contact form integration.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://example.com/sahoo-portfolio",
    githubUrl: "https://github.com/sahoo-portfolio",
    madeAt: "Personal",
  },
  {
    image: githubApi,
    title: "Github API Project",
    description:
      "An application utilizing GitHub's API to fetch user repositories. Implemented search functionality, pagination, and responsive design using React and Axios.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "GitHub API"],
    liveUrl: "https://example.com/github-api-project",
    githubUrl: "https://github.com/github-api-project",
    madeAt: "Personal",
  },
  {
    image: speedtest,
    title: "SpeedTest App",
    description:
      "A web application to test internet speed. Built using React and integrated with a speed testing API. Features real-time speed calculation and responsive UI.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://example.com/speedtest-app",
    githubUrl: "https://github.com/speedtest-app",
    madeAt: "Personal",
  },
  {
    image: speedtest,
    title: "SpeedTest App",
    description:
      "A web application to test internet speed. Built using React and integrated with a speed testing API. Features real-time speed calculation and responsive UI.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://example.com/speedtest-app",
    githubUrl: "https://github.com/speedtest-app",
    madeAt: "Personal",
  },
  {
    image: speedtest,
    title: "SpeedTest App",
    description:
      "A web application to test internet speed. Built using React and integrated with a speed testing API. Features real-time speed calculation and responsive UI.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://example.com/speedtest-app",
    githubUrl: "https://github.com/speedtest-app",
    madeAt: "Personal",
  },
  {
    image: speedtest,
    title: "SpeedTest App",
    description:
      "A web application to test internet speed. Built using React and integrated with a speed testing API. Features real-time speed calculation and responsive UI.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://example.com/speedtest-app",
    githubUrl: "https://github.com/speedtest-app",
    madeAt: "Personal",
  },
];

export const MyProject = () => {
  return (
    <div id="projects" className="myproject-component">
      <h2>03. Projects</h2>

      <div className="myproject--component">
        <h1></h1>
        <div className="myproject--cards">
          {initialProjects.slice(0, 6).map((project, index) => (
            <div key={index} className="myproject--card">
              <img
                src={project.image}
                className="project--image"
                alt={project.title}
              />
              <div className="project--details">
                <b>{project.title}</b>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="myproject--buttons">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="myproject--button"
                  >
                    <BsGithub /> GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="myproject--button"
                  >
                    <SiDarkreader /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
