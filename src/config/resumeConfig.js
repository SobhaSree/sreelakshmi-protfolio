// Update resumeUrl when you replace the Google Drive file.
// Share the PDF as "Anyone with the link – Viewer" so the copied link opens for visitors.
export const resumeConfig = {
  resumeUrl:
    "https://drive.google.com/file/d/1kE-rBTWtgaxpAL3jLAzpMuOLJGKO0P6c/view?usp=sharing",
};

// Returns "ready", "missing", or "invalid" so the copy button can explain what to fix.
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
