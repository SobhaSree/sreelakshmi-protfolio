import { useState } from "react";
import { FiAlertCircle, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { socialLinks } from "../config/socialConfig";

const linkDetails = {
  github: { label: "GitHub", icon: FiGithub },
  linkedin: { label: "LinkedIn", icon: FiLinkedin },
  email: { label: "Email", icon: FiMail },
};

function buildHref(key, value) {
  const trimmed = value.trim();
  if (key === "email" && !trimmed.startsWith("mailto:")) {
    return `mailto:${trimmed}`;
  }
  return trimmed;
}

export default function SocialLinks({ items = ["github", "linkedin"], className = "" }) {
  const [notice, setNotice] = useState("");

  return (
    <div className={className}>
      <ul className="social-row">
        {items.map((key) => {
          const detail = linkDetails[key];
          const Icon = detail.icon;
          const rawValue = socialLinks[key] ?? "";
          const hasLink = rawValue.trim() !== "";

          if (!hasLink) {
            return (
              <li key={key}>
                <button
                  type="button"
                  className="social-link"
                  onClick={() =>
                    setNotice(
                      `Add your ${detail.label} link in src/config/socialConfig.js.`
                    )
                  }
                >
                  <Icon aria-hidden="true" />
                  {detail.label}
                </button>
              </li>
            );
          }

          const href = buildHref(key, rawValue);
          const isEmail = key === "email";

          return (
            <li key={key}>
              <a
                className="social-link"
                href={href}
                {...(isEmail
                  ? {}
                  : { target: "_blank", rel: "noreferrer noopener" })}
              >
                <Icon aria-hidden="true" />
                {detail.label}
              </a>
            </li>
          );
        })}
      </ul>
      {notice ? (
        <p className="form-message form-message-warning" role="status">
          <FiAlertCircle aria-hidden="true" />
          <span>{notice}</span>
        </p>
      ) : null}
    </div>
  );
}
