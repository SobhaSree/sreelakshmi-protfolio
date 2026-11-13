import profilePlaceholder from "../assets/profile-placeholder.svg";
import DownloadResumeButton from "./DownloadResumeButton";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Personal portfolio</p>
          <h1 className="hero-title">Sreelakshmi Aji</h1>
          <p className="hero-role">Aspiring QA / Test Engineer</p>
          <p className="hero-intro">
            Computer Science Engineering graduate seeking an entry-level QA /
            Test Engineer position. Knowledge of manual testing, test case
            design, defect reporting, API testing, and UI automation using
            Playwright with TypeScript.
          </p>
          <div className="hero-actions">
            <a className="btn btn-secondary" href="#projects">
              View Projects
            </a>
            <DownloadResumeButton />
          </div>
          <SocialLinks items={["github", "linkedin"]} className="hero-social" />
        </div>

        <figure className="hero-portrait">
          <div className="hero-portrait-frame">
            <img
              src={profilePlaceholder}
              alt="Profile image placeholder for Sreelakshmi Aji"
            />
          </div>
          <figcaption>Profile photo placeholder</figcaption>
        </figure>
      </div>
    </section>
  );
}
