import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">04 — Experience</p>
          <h2 className="section-title">Internship &amp; Training Experience</h2>
          <p className="section-text">
            Practical experience across software testing, test automation, and technical training.
          </p>
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

              {item.responsibilities && item.responsibilities.length > 0 ? (
                <div className="experience-block">
                  <h4>Key Activities &amp; Responsibilities</h4>
                  <ul>
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {item.learningExperience ? (
                <div className="experience-block">
                  <h4>Key Learning</h4>
                  <p>{item.learningExperience}</p>
                </div>
              ) : null}

              {item.details ? (
                <div className="experience-block">
                  <h4>Overview</h4>
                  <p>{item.details}</p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
