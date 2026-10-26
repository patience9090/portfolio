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
    github: "https://github.com/patience9090/weather_app.git",
  },

  {
    title: "Student Record Management System",
    image: srmsImg,
    description:
      "A full-stack student management system with authentication, profiles and records management.",
    tech: "React • FastAPI • MongoDB",
    github: "https://github.com/IT-Climax/it_farms.git",
  },

  {
    title: "Lynktik",
    image: lynktikImg,
    description:
     "A LinkedIn-focused networking and visibility platform with authentication, profiles and creator community features.",
    tech: "Next.js • React • Tailwind CSS • Clerk • FastAPI • MongoDB",
    github: "https://github.com/patience9090/lynktik",
  },

  {
    title: "Portfolio Website",
    image: portfolioImg,
    description:
      "A modern portfolio website showcasing my skills, projects and services.",
    tech: "React • Vite • CSS",
    github: "https://github.com/patience9090/portfolio",
  },

  {
    title: "WiRelay",
    image: wirelayImg,
    description:
      "A Windows and Android application for sharing Wi-Fi between a laptop and phone without relying on a traditional hotspot.",
    tech: "C# • .NET 8 • WPF • Android • Gradle",
    github: "https://github.com/patience9090/WiRelay",
  },

  {
    title: "Service Hub",
    image: serviceHubImg,
    description:
      "A platform where customers can book phone repairs, maintenance services and connect with trusted technicians.",
    tech: "React • Node.js • MongoDB",
    github: "https://github.com/fatieeeaminuuu/MIH-project.git",
  },

  {
    title: "Client Website",
    image: divneyImg,
    description:
      "A responsive website developed for a client with a focus on business growth and user experience.",
    tech: "React • CSS • JavaScript",
    github: "https://github.com/patience9090/ClientWebsite.git",
  },
];

function Projects() {
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

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.title}>

              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link"
                aria-label={`View the full ${project.title} image`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </a>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="tech-stack">
                  {project.tech}
                </span>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    Check it out on GitHub →
                  </a>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;