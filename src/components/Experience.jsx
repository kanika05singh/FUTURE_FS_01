import { Briefcase } from "lucide-react";
import { experienceInfo } from "../data/portfolioData.js";
import { useInView } from "../hooks/useInView.js";

function Experience() {
  const [ref, isVisible] = useInView();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">04 Experience</span>
          <h2 className="section-title">Internship experience</h2>
        </div>

        <div ref={ref} className={`timeline reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="timeline-card">
            <div className="timeline-card__period">{experienceInfo.duration}</div>
            <div>
              <h3 className="timeline-card__title">
                <Briefcase
                  size={18}
                  style={{ verticalAlign: "-3px", marginRight: "8px" }}
                  aria-hidden="true"
                />
                {experienceInfo.role}
              </h3>
              <p className="timeline-card__org">{experienceInfo.company}</p>
              <p className="timeline-card__desc">{experienceInfo.description}</p>

              <ul className="timeline-card__list">
                {experienceInfo.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
