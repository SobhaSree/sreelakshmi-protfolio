import { FiExternalLink } from "react-icons/fi";
import DownloadResumeButton from "./DownloadResumeButton";
import { resumeConfig } from "../config/resumeConfig";

export default function Resume() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <div className="card resume-panel">
          <p className="eyebrow">05 — Resume</p>
          <h2 className="section-title">Resume</h2>
          <p className="section-text">
            Download my resume to review my qualifications, education, and technical QA experience.
          </p>
          <div className="resume-actions">
            <DownloadResumeButton className="resume-download" />
            {resumeConfig.resumeUrl ? (
              <a
                href={resumeConfig.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary"
              >
                <FiExternalLink aria-hidden="true" />
                View on Google Drive
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
