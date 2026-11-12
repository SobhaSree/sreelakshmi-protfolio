import { useState } from "react";
import { FiAlertCircle, FiCheck, FiCopy } from "react-icons/fi";
import { getResumeLinkState, resumeConfig } from "../config/resumeConfig";

const statusMessages = {
  missing:
    "Resume link is not configured yet. Add your Google Drive link in src/config/resumeConfig.js.",
  invalid:
    "The resume link needs a valid http or https URL. Update resumeUrl in src/config/resumeConfig.js.",
  success: "Resume link copied successfully!",
  error:
    "Could not copy the resume link. Allow clipboard access in your browser and try again.",
};

export default function CopyResumeButton({ className = "" }) {
  const [status, setStatus] = useState({ type: "", text: "" });

  async function handleCopyResume() {
    const linkState = getResumeLinkState();

    if (linkState !== "ready") {
      setStatus({ type: "warning", text: statusMessages[linkState] });
      return;
    }

    // Clipboard API is only available in secure contexts such as localhost or HTTPS.
    if (!window.isSecureContext || !navigator.clipboard?.writeText) {
      setStatus({ type: "error", text: statusMessages.error });
      return;
    }

    try {
      await navigator.clipboard.writeText(resumeConfig.resumeUrl.trim());
      setStatus({ type: "success", text: statusMessages.success });
    } catch {
      setStatus({ type: "error", text: statusMessages.error });
    }
  }

  return (
    <div className={`copy-resume ${className}`.trim()}>
      <button type="button" className="btn btn-primary" onClick={handleCopyResume}>
        {status.type === "success" ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
        Copy Resume Link
      </button>
      {status.text ? (
        <p className={`form-message form-message-${status.type}`} role="status">
          {status.type === "success" ? (
            <FiCheck aria-hidden="true" />
          ) : (
            <FiAlertCircle aria-hidden="true" />
          )}
          <span>{status.text}</span>
        </p>
      ) : null}
    </div>
  );
}
