import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Highlight the nav link for the section currently near the top of the viewport.
    function updateActiveSection() {
      const marker = 120;
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= marker) {
          current = item.id;
        }
      });

      setActiveSection(current);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="navbar">
      <nav className="nav-inner" aria-label="Primary">
        <a className="nav-brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            SA
          </span>
          Sreelakshmi
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                href={`#${item.id}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
