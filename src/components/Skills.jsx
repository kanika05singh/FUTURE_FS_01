import { Code2, Layout, Server, Database, Wrench, GraduationCap } from "lucide-react";
import { skillCategories } from "../data/portfolioData.js";
import { useInView } from "../hooks/useInView.js";

const categoryIcons = {
  Programming: Code2,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  "Core CS": GraduationCap,
};

function Skills() {
  const [ref, isVisible] = useInView();

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">02 Skills</span>
          <h2 className="section-title">Tools & technologies</h2>
          <p className="section-subtitle">
            A working toolkit across the stack, backed by core computer-science
            fundamentals.
          </p>
        </div>

        <div
          ref={ref}
          className={`skills__grid reveal ${isVisible ? "is-visible" : ""}`}
        >
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Code2;
            return (
              <div key={category.title} className="skill-card">
                <h3 className="skill-card__title">
                  <Icon size={16} style={{ verticalAlign: "-3px", marginRight: "8px" }} aria-hidden="true" />
                  {category.title}
                </h3>
                <div className="skill-card__badges">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
