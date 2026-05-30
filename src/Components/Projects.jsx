import { Project } from "../data/Project";
import { FaGithub } from "react-icons/fa";
import "../CSS/Project.css";

const Projects = () => {
  return (
    <>
      <div>
        <div className="proj-intro">
          <p>
            <i className="fa-brands fa-accusoft"></i>
          </p>
          <span className="proj-head">
            🚧{" "}
            <strong className="proj-bold">Exciting things are coming!</strong>{" "}
            I'm working on some cool projects that I can't wait to share. Stay
            tuned for updates!{" "}
            </span>
          <br /> <br />
          <section className="loading-section">
            <div className="loader"></div>
            <div className="loading-text">
              <em>More Projects will be updated soon... </em>
            </div>
          </section>
        </div>

        <div id="proj" className="proj-body">
          {Project.map((work) => (
            <div key={work.id} className="proj-body-item">
              <p className="proj-emoji">{work.emoji}</p>
              <span className="proj-title">
                {work.title}{" "}
                <span
                  className={`proj-stat ${
                    work.status?.toLowerCase() === "completed"
                      ? "stat-completed"
                      : "stat-inprogress"
                  }`}
                >
                  {work.status}
                </span>{" "}
              </span>
              <br />
              <span className="proj-description">{work.description}</span>

              <div className="proj-links">
                <span className="proj-status">
                  {work.mark}{" "}
                  <span
                    className={`${
                      work.update?.toLowerCase().includes("completed")
                        ? "update-completed"
                        : "update-inprogress"
                    }`}
                  >
                    {work.update}
                  </span>
                </span>

                <span className="proj-nav">
                  {" "}
                  <span id="git" className="bg">
                    <a
                      href={work.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </span>
                  <span id="link">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {work.linkicon}
                    </a>
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
