import { FiClipboard, FiCpu, FiDatabase, FiGlobe } from "react-icons/fi";
import { skillCategories } from "../data/skills";

const iconMap = {
  clipboard: FiClipboard,
  cpu: FiCpu,
  globe: FiGlobe,
  database: FiDatabase,
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">02 — Skills</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-text">
            Skills I am developing across manual testing, automation, API
            testing, and supporting tools.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] ?? FiClipboard;

            return (
              <article className="card skill-card" key={category.id}>
                <div className="skill-card-heading">
                  <span className="skill-card-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{category.title}</h3>
                </div>
                <ul className="skill-tags">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
