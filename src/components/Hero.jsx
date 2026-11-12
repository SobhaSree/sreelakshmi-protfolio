import profilePlaceholder from "../assets/profile-placeholder.svg";
import CopyResumeButton from "./CopyResumeButton";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Personal portfolio</p>
          <h1 className="hero-title">Sreelakshmi Aji</h1>
          <p className="hero-role">Aspiring QA Engineer</p>
          <p className="hero-intro">
            I am an aspiring QA Engineer with an interest in software quality
            assurance and software testing. I enjoy exploring applications,
            identifying issues, and ensuring that software meets user
            expectations.
          </p>
          <div className="hero-actions">
            <a className="btn btn-secondary" href="#projects">
              View Projects
            </a>
            <CopyResumeButton />
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
