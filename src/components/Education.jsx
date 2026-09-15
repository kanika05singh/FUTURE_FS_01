import { GraduationCap } from "lucide-react";
import { educationInfo } from "../data/portfolioData.js";
import { useInView } from "../hooks/useInView.js";

function Education() {
  const [ref, isVisible] = useInView();

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">05 Education</span>
          <h2 className="section-title">Academic background</h2>
        </div>

        <div ref={ref} className={`timeline reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="timeline-card">
            <div className="timeline-card__period">{educationInfo.duration}</div>
            <div>
              <h3 className="timeline-card__title">
                <GraduationCap
                  size={18}
                  style={{ verticalAlign: "-3px", marginRight: "8px" }}
                  aria-hidden="true"
                />
                {educationInfo.degree}
              </h3>
              <p className="timeline-card__org">
                {educationInfo.college} &middot; {educationInfo.university}
              </p>

              <span className="about__highlight-label" style={{ marginBottom: "10px", display: "block" }}>
                Relevant coursework
              </span>
              <div className="timeline-card__coursework">
                {educationInfo.coursework.map((course) => (
                  <span key={course} className="skill-badge">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
