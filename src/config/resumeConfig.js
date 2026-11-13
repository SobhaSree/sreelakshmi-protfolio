// Resume configuration
// The PDF file is located in public/resume.pdf so it downloads directly for any visitor.
// You can also view/share the Google Drive link.
const baseUrl = import.meta.env.BASE_URL || "/";

export const resumeConfig = {
  // Direct download file in the public folder (works locally and when deployed)
  downloadUrl: `${baseUrl}resume.pdf`.replace(/\/{2,}/g, "/"),
  fileName: "Sreelakshmi_Aji_Resume.pdf",
  // Google Drive preview / viewer URL
  resumeUrl:
    "https://drive.google.com/file/d/1kE-rBTWtgaxpAL3jLAzpMuOLJGKO0P6c/view?usp=sharing",
};

// Returns "ready", "missing", or "invalid" so the UI can validate if needed.
export function getResumeLinkState(url = resumeConfig.resumeUrl) {
  if (typeof url !== "string" || url.trim() === "") {
    return "missing";
  }

  try {
    const parsed = new URL(url.trim());
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return "ready";
    }
    return "invalid";
  } catch {
    return "invalid";
  }
}
