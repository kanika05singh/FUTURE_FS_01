import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons.jsx";
import { personalInfo, heroContent } from "../data/portfolioData.js";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__mesh" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Open to Internship Opportunities
          </span>

          <h1 className="hero__name">
            <span className="hero__greeting">{heroContent.greeting}</span>
            {personalInfo.name}
          </h1>

          <div className="hero__roles">
            <span className="hero__role-pill">{personalInfo.role}</span>
            <span className="hero__role-pill">{personalInfo.tagline}</span>
          </div>

          <p className="hero__intro">{heroContent.intro}</p>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
              <Mail size={18} />
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer noopener"
              className="icon-link"
              aria-label="Kanika Singh on GitHub"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="icon-link"
              aria-label="Kanika Singh on LinkedIn"
            >
              <LinkedinIcon size={19} />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="code-card" aria-hidden="true">
            <div className="code-card__titlebar">
              <span className="code-card__dots">
                <span />
                <span />
                <span />
              </span>
              <span className="code-card__filename">{heroContent.codeCard.fileName}</span>
            </div>
            <div className="code-card__body">
              {heroContent.codeCard.lines.map((line, lineIndex) => (
                <div
                  key={lineIndex}
                  className="code-card__line"
                  style={{ animationDelay: `${lineIndex * 90}ms` }}
                >
                  {line.map((token, tokenIndex) => (
                    <span key={tokenIndex} className={`tok-${token.type}`}>
                      {token.text}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
        Scroll to explore
        <ChevronDown size={16} />
      </a>
    </section>
  );
}

export default Hero;
