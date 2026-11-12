const footerLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">Sreelakshmi Aji</p>
          <p className="footer-role">Aspiring QA Engineer</p>
        </div>
        <ul className="footer-links">
          {footerLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>
        <p className="footer-copy">© {year} Sreelakshmi Aji</p>
      </div>
    </footer>
  );
}
