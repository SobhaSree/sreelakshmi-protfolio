import CopyResumeButton from "./CopyResumeButton";

export default function Resume() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <div className="card resume-panel">
          <p className="eyebrow">05 — Resume</p>
          <h2 className="section-title">Resume</h2>
          <p className="section-text">
            Copy the Google Drive link to my resume. This button does not
            download a file. It places the link on your clipboard.
          </p>
          <CopyResumeButton className="resume-copy" />
        </div>
      </div>
    </section>
  );
}
