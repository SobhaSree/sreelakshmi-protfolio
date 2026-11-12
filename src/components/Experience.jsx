import { experience } from "../data/experience";

function ExperienceText({ value, emptyLabel }) {
  if (value && value.trim()) {
    return <p>{value}</p>;
  }

  return <p className="placeholder-copy">{emptyLabel}</p>;
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">04 — Experience</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="card experience-card" key={item.id}>
              <header className="experience-header">
                <div>
                  <h3>{item.position}</h3>
                  <p className="experience-company">{item.company}</p>
                </div>
                <p className="duration-pill">{item.duration}</p>
              </header>

              <div className="experience-block">
                <h4>Responsibilities</h4>
                {item.responsibilities.length > 0 ? (
                  <ul>
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="placeholder-copy">
                    Add your responsibilities in src/data/experience.js.
                  </p>
                )}
              </div>

              <div className="experience-block">
                <h4>Learning experience</h4>
                <ExperienceText
                  value={item.learningExperience}
                  emptyLabel="Add what you learned during this internship in src/data/experience.js."
                />
              </div>

              <div className="experience-block">
                <h4>Details</h4>
                <ExperienceText
                  value={item.details}
                  emptyLabel="Add any other relevant details in src/data/experience.js."
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
