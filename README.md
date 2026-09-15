<<<<<<< HEAD
# Kanika Singh — Personal Portfolio

A responsive, recruiter-ready personal portfolio website built for the **Future Interns
Full Stack Web Development internship — Task 1 (2026)**.

Live-editable, component-based React app with dark/light theming, a validated contact
form, and every section required for a placement/internship-ready developer portfolio.

---

## Overview

This project presents Kanika Singh — a B.Tech Computer Science & Engineering student
and aspiring full-stack developer — through nine sections: a sticky navbar, hero,
about, skills, projects, experience, education, contact, and footer. The visual design
uses a subtle "code editor" motif (a tab-style nav, comment-style section labels, and
a syntax-highlighted hero card) to reflect the subject matter without being loud or
gimmicky — the goal throughout was to stay clean and professional enough for a
recruiter to scan in under a minute.

## Features

- **Responsive, mobile-first layout** — works cleanly from small phones through wide
  desktop monitors
- **Dark / light mode** with a toggle in the navbar, persisted across visits and
  defaulting to the visitor's OS preference
- **Accessible by default** — semantic HTML, visible keyboard focus states, a "skip to
  content" link, `aria-label`s on icon-only buttons, and `prefers-reduced-motion`
  support
- **Reusable, component-based architecture** — one component per section, all content
  centralized in a single data file for easy editing
- **Client-side validated contact form**, pre-wired with commented instructions for
  connecting EmailJS, Formspree, or a custom Node.js/Express backend
- **SEO-ready** — descriptive `<title>`, meta description, Open Graph and Twitter Card
  placeholders, and semantic markup throughout
- **Smooth scrolling & subtle motion** — a one-time scroll-reveal on each section and a
  staggered reveal for the hero's code card, both skipped automatically for visitors
  who prefer reduced motion

## Technologies

- React 19 + Vite
- Plain HTML5 / CSS3 (custom design system via CSS variables — no CSS framework)
- JavaScript (ES modules)
- [lucide-react](https://lucide.dev/) for icons

## Project structure

```
kanika-portfolio/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── BrandIcons.jsx   # GitHub / LinkedIn icons
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.jsx     # dark/light mode state
│   ├── data/
│   │   └── portfolioData.js     # ALL editable content lives here
│   ├── hooks/
│   │   └── useInView.js         # scroll-reveal helper
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Installation & running locally

You'll need [Node.js](https://nodejs.org/) 18 or later.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (with hot reload)
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`) — open it in your
browser.

## Building for production

```bash
npm run build
```

This outputs a production-ready build to `dist/`. Preview it locally with:

```bash
npm run preview
```
## Deployment (Vercel)

1. Push this project to a GitHub repository (see below).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, then import your repository.
4. Vercel auto-detects Vite — leave the defaults:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. Vercel will give you a live URL
   (e.g. `kanika-portfolio.vercel.app`) — update `personalInfo` and the Open Graph URL
   in `index.html` with it afterward.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Kanika Singh portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kanika-portfolio.git
git push -u origin main
```

=======
# FUTURE_FS_01
