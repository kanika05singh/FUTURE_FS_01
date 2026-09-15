import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons.jsx";
import { personalInfo } from "../data/portfolioData.js";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="footer__brand">{personalInfo.name}</div>
          <div className="footer__copy">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </div>
        </div>

        <div className="footer__links">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer noopener"
            className="icon-link"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a href="#home" className="footer__back-to-top">
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
