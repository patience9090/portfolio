import { useEffect, useState } from "react";
import "./projects.css";

import weatherImg from "../assets/weather-app.png";
import srmsImg from "../assets/srms.png";
import portfolioImg from "../assets/portfolio.png";
import serviceHubImg from "../assets/serviceHub.png";
import divneyImg from "../assets/divney.png";
import lynktikImg from "../assets/lynktik.png";
import wirelayImg from "../assets/wirelay.png";

const projects = [
  {
    title: "Weather App",
    image: weatherImg,
    description:
      "A responsive weather application with real-time weather updates and forecasts.",
    tech: "React • API • CSS",
    category: "Frontend",
    status: "Completed",
    github: "https://github.com/patience9090/weather_app.git",
  },

  {
    title: "Student Record Management System",
    image: srmsImg,
    description:
      "A full-stack student management system with authentication, profiles and records management.",
    tech: "React • FastAPI • MongoDB",
    category: "Full-stack",
    status: "Completed",
    github: "https://github.com/IT-Climax/it_farms.git",
  },

  {
    title: "Lynktik",
    image: lynktikImg,
    description:
     "A LinkedIn-focused networking and visibility platform with authentication, profiles and creator community features.",
    tech: "Next.js • React • Tailwind CSS • Clerk • FastAPI • MongoDB",
    category: "Full-stack",
    status: "In Progress",
    github: "https://github.com/patience9090/lynktik",
  },

  {
    title: "Portfolio Website",
    image: portfolioImg,
    description:
      "A modern portfolio website showcasing my skills, projects and services.",
    tech: "React • Vite • CSS",
    category: "Frontend",
    status: "Live",
    demo: "https://patience9090.github.io/portfolio/",
    github: "https://github.com/patience9090/portfolio",
  },

  {
    title: "WiRelay",
    image: wirelayImg,
    description:
      "A Windows and Android application for sharing Wi-Fi between a laptop and phone without relying on a traditional hotspot.",
    tech: "C# • .NET 8 • WPF • Android • Gradle",
    category: "Desktop & Mobile",
    status: "In Progress",
    github: "https://github.com/patience9090/WiRelay",
  },

  {
    title: "Service Hub",
    image: serviceHubImg,
    description:
      "A platform where customers can book phone repairs, maintenance services and connect with trusted technicians.",
    tech: "React • Node.js • MongoDB",
    category: "Full-stack",
    status: "Completed",
    github: "https://github.com/fatieeeaminuuu/MIH-project.git",
  },

  {
    title: "Client Website",
    image: divneyImg,
    description:
      "A responsive website developed for a client with a focus on business growth and user experience.",
    tech: "React • CSS • JavaScript",
    category: "Frontend",
    status: "Live",
    github: "https://github.com/patience9090/ClientWebsite.git",
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section className="projects" id="projects">
      <div className="container">

        <span className="section-tag">
          FEATURED PROJECTS
        </span>

        <h2>
          Projects I've Built
        </h2>

        <p className="section-description">
          A collection of projects that showcase my frontend,
          backend and full-stack development skills.
        </p>

        <div className="project-filters" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              type="button"
              className={`filter-button ${activeFilter === category ? "active" : ""}`}
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">

          {filteredProjects.map((project) => (
            <div className="project-card" key={project.title}>

              <button
                type="button"
                className="project-image-link"
                onClick={() => setSelectedProject(project)}
                aria-label={`View the full ${project.title} image`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <span className="image-overlay">View image</span>
              </button>

              <div className="project-content">

                <div className="project-heading">
                  <h3>{project.title}</h3>
                  <span className={`project-status status-${project.status.toLowerCase().replace(" ", "-")}`}>
                    {project.status}
                  </span>
                </div>

                <p>{project.description}</p>

                <span className="tech-stack">
                  {project.tech}
                </span>

                <div className="project-buttons">
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="demo-btn disabled" aria-label={`${project.title} demo is not available`}>
                      Live Demo unavailable
                    </span>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                    GitHub ↗
                  </a>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {selectedProject && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} full-size image`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="lightbox-content">
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close image viewer"
            >
              ×
            </button>
            <img src={selectedProject.image} alt={`${selectedProject.title} full-size preview`} />
            <p>{selectedProject.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;