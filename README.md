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

## Customize your information

Every piece of personal content lives in **`src/data/portfolioData.js`** — you should
not need to touch any component file just to update copy. Look for lines marked
`// TODO` and anything in `[brackets]`:

| What to update | Where |
|---|---|
| Email, GitHub URL, LinkedIn URL | `personalInfo` object |
| Resume file | Add `resume.pdf` to `/public`, matches `personalInfo.resumeUrl` |
| Hero intro text | `heroContent.intro` |
| About paragraphs | `aboutContent.paragraphs` |
| Skills | `skillCategories` |
| Projects (title, description, tech, links) | `projects` array — replace the
  `[PROJECT TITLE]` placeholders with your own work |
| College, university, year, coursework | `educationInfo` |
| Internship details | `experienceInfo` |

Until you replace a project's GitHub/Live Demo links, those buttons render disabled
(not broken links) so nothing on the live site points nowhere.

### Connecting the contact form to a real backend

The form in `src/components/Contact.jsx` validates input and is ready to send — open
the `handleSubmit` function and uncomment **one** of the three commented options:

- **EmailJS** — client-side email sending, no backend needed
- **Formspree** — POST to a Formspree endpoint, no backend needed
- **Custom Node.js/Express API** — POST to your own `/api/contact` route

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

## Future Interns Task 1 — submission checklist

- [ ] Replace all placeholder text in `src/data/portfolioData.js` (email, GitHub,
      LinkedIn, resume, college/university/year, at least 2–3 more real projects)
- [ ] Add a real `resume.pdf` to `/public`
- [ ] Run `npm run build` one more time locally and confirm it completes with no errors
- [ ] Click through every navbar link (desktop **and** the mobile hamburger menu) and
      confirm each scrolls to the right section
- [ ] Toggle dark/light mode and check all sections in both themes
- [ ] Submit the contact form with empty fields to confirm validation messages appear,
      then with valid input to confirm the success message shows
- [ ] Resize the browser (or use dev tools' device toolbar) to check mobile, tablet,
      and desktop breakpoints
- [ ] Push the final code to GitHub
- [ ] Deploy to Vercel and confirm the live URL works
- [ ] Add the live URL and GitHub repo link to your Future Interns submission
=======
# FUTURE_FS_01
>>>>>>> 101f8ee20f13c8aa2a598e36c6ab2b9929846444
