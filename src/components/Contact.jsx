import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons.jsx";
import { personalInfo, contactInfo } from "../data/portfolioData.js";
import { useInView } from "../hooks/useInView.js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFormState = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (!values.message.trim()) {
    errors.message = "Please write a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

function Contact() {
  const [ref, isVisible] = useInView();
  const [values, setValues] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatusMessage("");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      // ── Connect a real backend here ────────────────────────────────
      // Option A — EmailJS:
      //   await emailjs.send("SERVICE_ID", "TEMPLATE_ID", values, "PUBLIC_KEY");
      //
      // Option B — Formspree:
      //   await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //     method: "POST",
      //     headers: { Accept: "application/json" },
      //     body: new FormData(event.target),
      //   });
      //
      // Option C — your own Node.js/Express API:
      //   await fetch("/api/contact", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(values),
      //   });
      //
      // For now, this simulates a network call so the form is fully
      // functional in the UI without a backend configured yet.
      await new Promise((resolve) => setTimeout(resolve, 700));

      setStatusMessage("Thanks! Your message has been noted — I'll get back to you soon.");
      setValues(initialFormState);
      setErrors({});
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatusMessage("Something went wrong. Please try emailing me directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">06 Contact</span>
          <h2 className="section-title">{contactInfo.heading}</h2>
          <p className="section-subtitle">{contactInfo.subheading}</p>
        </div>

        <div ref={ref} className={`contact__grid reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="contact__info-card">
            <p>Prefer email or a quick DM? Here's where to find me.</p>
            <div className="contact__info-list">
              <div className="contact__info-row">
                <span className="contact__info-icon">
                  <Mail size={17} />
                </span>
                <span className="contact__info-text">
                  <span className="contact__info-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="contact__info-value">
                    {personalInfo.email}
                  </a>
                </span>
              </div>

              <div className="contact__info-row">
                <span className="contact__info-icon">
                  <GithubIcon size={17} />
                </span>
                <span className="contact__info-text">
                  <span className="contact__info-label">GitHub</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contact__info-value"
                  >
                    {personalInfo.github.replace("https://", "")}
                  </a>
                </span>
              </div>

              <div className="contact__info-row">
                <span className="contact__info-icon">
                  <LinkedinIcon size={17} />
                </span>
                <span className="contact__info-text">
                  <span className="contact__info-label">LinkedIn</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contact__info-value"
                  >
                    {personalInfo.linkedin.replace("https://", "")}
                  </a>
                </span>
              </div>

              <div className="contact__info-row">
                <span className="contact__info-icon">
                  <MapPin size={17} />
                </span>
                <span className="contact__info-text">
                  <span className="contact__info-label">Location</span>
                  <span className="contact__info-value">{personalInfo.location}</span>
                </span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__row">
              <div className={`form-field ${errors.name ? "form-field--error" : ""}`}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="form-field__error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={`form-field ${errors.email ? "form-field--error" : ""}`}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="form-field__error">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className={`form-field ${errors.subject ? "form-field--error" : ""}`}>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={values.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <span id="subject-error" className="form-field__error">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className={`form-field ${errors.message ? "form-field--error" : ""}`}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me a bit about the opportunity or idea..."
                value={values.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span id="message-error" className="form-field__error">
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={17} />
            </button>

            {statusMessage && (
              <p className="contact-form__status" role="status">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
