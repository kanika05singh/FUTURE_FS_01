import { Download } from "lucide-react";
import { aboutContent, personalInfo } from "../data/portfolioData.js";
import { useInView } from "../hooks/useInView.js";

function About() {
  const [ref, isVisible] = useInView();

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">01 About</span>
          <h2 className="section-title">A little About Me</h2>
          <p className="section-subtitle">
            Computer science background, a hands-on approach to learning, and a clear
            direction: full-stack development.
          </p>
        </div>

        <div
          ref={ref}
          className={`about__grid reveal ${isVisible ? "is-visible" : ""}`}
        >
          <div className="about__paragraphs">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <a
              href={personalInfo.resumeUrl}
              download
              className="btn btn-primary about__resume-btn"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <div className="about__highlights">
            {aboutContent.highlights.map((item) => (
              <div key={item.label} className="about__highlight-card">
                <span className="about__highlight-label">{item.label}</span>
                <span className="about__highlight-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
