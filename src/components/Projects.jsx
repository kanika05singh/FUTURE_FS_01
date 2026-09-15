import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons.jsx";
import ProjectArt from "./ProjectArt.jsx";
import { projects } from "../data/portfolioData.js";
import { useInView } from "../hooks/useInView.js";
import { useTilt } from "../hooks/useTilt.js";

// Placeholder links look like "[GITHUB URL]" until replaced with a real
// address. Render those as disabled buttons instead of dead "#" links.
function isPlaceholder(url) {
  return !url || url.startsWith("[");
}

function ProjectLinkButton({ href, label, icon }) {
  if (isPlaceholder(href)) {
    return (
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        disabled
        title="Add this link in src/data/portfolioData.js"
      >
        {icon}
        {label}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="btn btn-secondary btn-sm"
    >
      {icon}
      {label}
    </a>
  );
}

function ProjectCard({ project }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(5);

  return (
    <article
      ref={ref}
      className="project-card project-card__badge"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {project.featured && (
        <span className="project-card__featured-tag">Project</span>
      )}
      <div
        className="project-card__visual"
        role="img"
        aria-label={`${project.title} preview`}
      >
        <ProjectArt pattern={project.pattern} />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tech">
          {project.tech.map((tech) => (
            <span key={tech} className="project-card__tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <ProjectLinkButton
            href={project.github}
            label="Code"
            icon={<GithubIcon size={16} />}
          />
          <ProjectLinkButton
            href={project.demo}
            label="Live Demo"
            icon={<ExternalLink size={16} />}
          />
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [ref, isVisible] = useInView();

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">03 Projects</span>
          <h2 className="section-title">Things I have built</h2>
          <p className="section-subtitle">
            A mix of Coursework, Personal Projects, and Internship Work.
          </p>
        </div>

        <div
          ref={ref}
          className={`projects__grid reveal ${isVisible ? "is-visible" : ""}`}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
