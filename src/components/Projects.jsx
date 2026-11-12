import { useState } from "react";
import { FiAlertCircle, FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";

export default function Projects() {
  const [notice, setNotice] = useState("");

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">03 — Projects</p>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => {
            const githubUrl = project.githubUrl?.trim() ?? "";

            return (
              <article className="card project-card" key={project.id}>
                <p className="eyebrow">Featured project</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="skill-tags">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  {githubUrl ? (
                    <a
                      className="btn btn-secondary"
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <FiGithub aria-hidden="true" />
                      GitHub
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() =>
                        setNotice(
                          "Add your GitHub repository link in src/data/projects.js."
                        )
                      }
                    >
                      <FiGithub aria-hidden="true" />
                      GitHub
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {notice ? (
          <p className="form-message form-message-warning" role="status">
            <FiAlertCircle aria-hidden="true" />
            <span>{notice}</span>
          </p>
        ) : null}
      </div>
    </section>
  );
}
