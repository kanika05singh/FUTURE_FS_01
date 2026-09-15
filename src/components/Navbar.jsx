import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useScrollProgress } from "../hooks/useScrollProgress.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { personalInfo } from "../data/portfolioData.js";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const progress = useScrollProgress();
  const activeId = useActiveSection(navLinks.map((link) => link.id));

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="nav">
      <div className="container nav__bar">
        <a href="#home" className="nav__brand" aria-label={`${personalInfo.name} — home`}>
          <span className="nav__dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          {personalInfo.name}
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav__link ${activeId === link.id ? "nav__link--active" : ""}`}
              aria-current={activeId === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="nav__hamburger"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <nav
        className={`nav__mobile-panel ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Mobile"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav__mobile-link"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div
        className="nav__progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
}

export default Navbar;
