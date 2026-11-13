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
              I am a Computer Science Engineering graduate seeking an entry-level
              QA / Test Engineer position. I have knowledge of manual testing,
              test case design, defect reporting, API testing, and UI automation
              using Playwright with TypeScript.
            </p>
            <p>
              I am eager to apply my testing skills, learn industry practices, and
              contribute to software quality by identifying issues early and
              ensuring applications meet user expectations.
            </p>

            <div className="about-subblock">
              <h4>Certifications</h4>
              <ul className="cert-pills">
                <li>Cyber Security and Ethical Hacking – Techmaghi</li>
                <li>Problem Solving and Ideation Bootcamp – IEDC</li>
                <li>SAWIT.AI Learnathon – GUVI</li>
                <li>Cyber Awareness Session – Offenso</li>
                <li>Chatbot Mastery – IEDC Summit</li>
                <li>UXperience Figma Workshop – CYBORGS</li>
              </ul>
            </div>

            <div className="about-subblock">
              <h4>Leadership &amp; Activities</h4>
              <p className="leadership-text">
                First Year Class Representative • Students Lead – IEDC • Student
                Coordinator – Debate and Quiz Club • Women Lead – IEDC (2024–2025)
                • Executive Member – NSS (2024–2025) • Volunteer – Little Kites (2020)
              </p>
            </div>
          </article>

          <article className="card education-card">
            <p className="eyebrow">Education</p>
            <h3>Academic Background</h3>
            <dl className="education-list">
              <div>
                <dt>2022 – 2026</dt>
                <dd>
                  <strong>B.Tech, Computer Science and Engineering</strong>
                </dd>
                <dd className="education-school">
                  Mar Baselios Institute of Technology and Science, Nellimattom, Kothamangalam
                </dd>
              </div>

              <div>
                <dt>2020 – 2022</dt>
                <dd>
                  <strong>Higher Secondary (Plus Two)</strong>
                </dd>
                <dd className="education-school">
                  MGM Higher Secondary School, Kuruppampady
                </dd>
              </div>

              <div>
                <dt>2020</dt>
                <dd>
                  <strong>SSLC</strong>
                </dd>
                <dd className="education-school">
                  MGM Higher Secondary School, Kuruppampady
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}
