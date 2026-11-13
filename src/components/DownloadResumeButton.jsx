import { FiDownload } from "react-icons/fi";
import { resumeConfig } from "../config/resumeConfig";

export default function DownloadResumeButton({
  className = "",
  label = "Download Resume",
  variant = "primary",
}) {
  return (
    <div className={`download-resume ${className}`.trim()}>
      <a
        href={resumeConfig.downloadUrl}
        download={resumeConfig.fileName}
        className={`btn btn-${variant}`}
      >
        <FiDownload aria-hidden="true" />
        {label}
      </a>
    </div>
  );
}

