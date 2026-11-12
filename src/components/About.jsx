export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">01 — About</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <article className="card about-copy">
            <p>Hi, I&apos;m Sreelakshmi Aji.</p>
            <p>
              I am an aspiring QA Engineer with an interest in software quality
              assurance and software testing. I enjoy exploring applications,
              identifying issues and ensuring that software meets user
              expectations.
            </p>
            <p>
              I am developing my skills in manual testing, automation testing
              using Playwright and TypeScript, API testing and SQL.
            </p>
            <p>
              I am passionate about learning new technologies, improving my
              technical skills and building reliable software through effective
              testing.
            </p>
          </article>

          <article className="card education-card">
            <p className="eyebrow">Education</p>
            <h3>B.Tech Computer Science</h3>
            <dl className="education-list">
              <div>
                <dt>College</dt>
                <dd>Mar Baselios Institute of Technology and Science</dd>
              </div>
              <div>
                <dt>Graduation Year</dt>
                <dd>2026</dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}
