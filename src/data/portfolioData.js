// ─────────────────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT
// Every piece of personal text lives here so the rest of the app never
// needs to be touched to update copy, links, or project details.
//
// Anything wrapped in [brackets] is a placeholder — replace it with your
// real information before publishing. See README.md → "Customize your
// information" for a full walkthrough.
// ─────────────────────────────────────────────────────────────────────────

import { University } from "lucide-react";
export const personalInfo = {
  name: "Kanika Singh",
  role: "B.Tech Computer Science & Engineering Student",
  tagline: "Aspiring Full-Stack Developer || Data Science || Artificial Intelligence",
  location: "Dehradun,UttaraKhand,India",
  email: "kannusingh0510@gmail.com", 
  github: "https://github.com/kanika05singh", 
  linkedin: "https://www.linkedin.com/in/kanika-singh-59108b321", 
  resumeUrl: "/resume.pdf", 
};

export const heroContent = {
  greeting: "Hi, I am",
  intro:
    "I build clean, responsive web applications end-to-end — from component architecture to the last pixel of polish. Currently sharpening my full-stack skills through hands-on projects and internships, with a focus on React and modern JavaScript.",
  codeCard: {
    fileName: "kanika.about.js",
    lines: [
      [
        { type: "keyword", text: "const " },
        { type: "variable", text: "developer" },
        { type: "plain", text: " = {" },
      ],
      [
        { type: "property", text: "  name: " },
        { type: "string", text: '"Kanika Singh"' },
        { type: "plain", text: "," },
      ],
      [
        { type: "property", text: "  role: " },
        { type: "string", text: '"Artificial Intelligence and Data Science"' },
        { type: "plain", text: "," },
      ],
      [
        { type: "property", text: "  status: " },
        { type: "string", text: '"Open to internships"' },
        { type: "plain", text: "," },
      ],
      [
        { type: "property", text: "  stack: " },
        { type: "array", text: '["React", "Node", "MongoDB"]' },
        { type: "plain", text: "," },
      ],
      [
        { type: "property", text: "  loves: " },
        { type: "string", text: '"clean code & good UX"' },
        { type: "plain", text: "," },
      ],
      [{ type: "plain", text: "};" }],
    ],
  },
};

export const aboutContent = {
  paragraphs: [
    "I'm a Computer Science & Engineering student who enjoys turning ideas into working software — the kind of person who reads a product spec and starts sketching component trees before finishing the last sentence.",
    "Passionate in Artificial Intelligence and Web Development. Proficient in Python, Machine Learning, Data Structures and Algorithms with hands-on experience developing projects in Fraud Detection and Medical Chatbot. Enthusiastic about solving complex real-world problems through data-driven solutions while continuously expanding technical expertise and building scalable, high-impact applications.",
    "My Current goal is to grow into a full-stack developer who can move confidently between frontend interfaces and backend systems, and eventually contribute to products used by real people at scale.",
  ],
  highlights: [
    { label: "Background", value: "Computer Science & Engineering" },
    { label: "Focus", value: "Full-Stack Web Development" },
    { label: "Mindset", value: "Learning by Building" },
    { label: "Goal", value: "Full-Stack Developer role" },
  ],
};

export const skillCategories = [
  {
    title: "Programming",
    skills: ["C++", "JavaScript", "Python", "Java", "C","Numpy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL" ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code" , "Jupyter Notebook", "Postman" , "IntelliJ IDEA"],
  },
  {
    title: "Core CS",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "This site — a responsive, recruiter-ready developer portfolio built for the Future Interns Full-Stack Web Development internship, covering everything from component architecture to dark/light theming.",
    tech: ["React", "Vite", "JavaScript", "CSS3"],
    github: "[GITHUB URL]",
    demo: "[LIVE DEMO URL]",
    featured: true,
    pattern: "graph",
  },
  {
    title: "Credit Card Fraud Detection ",
    description: 
    [
    "Developed a machine learning-based fraud detection system using Logistic Regression to classify legitimate and fraudulent credit card transactions ",
                 "Performed data preprocessing, exploratory data analysis (EDA),and ",
                 "Optimized classification reliability by prioritizing  precision (94.85%) alongside standard accuracy metrics, significantly reducing false positive rates in fraud detection.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook",             
"Logistic Regression "],
    github: "[GITHUB URL]",
    demo: "[LIVE DEMO URL]",
    featured: true,
    pattern: "grid",
  },
  {
    title: "AI Medical Chatbot ",
    description: 
    [
    "Designed and developed a Retrieval-Augmented Generation(RAG) based medical chatbot capable of answering domain-specific healthcare queries using a vectorized medical knowledge base. ",
    "Engineered a highly scalable modular backend framework with Flask and MongoDB to seamlessly orchestrate persistent chat history, stateful session management, and secure user authentication.",
  ],
    tech: [ "Python","Flask", "Lang Chain", "Pinecone", "MongoDB", "Hugging Face Embeddings", "Open Router API" 
      ],
    github: "[GITHUB URL]",
    demo: "[LIVE DEMO URL]",
    featured: true,
    pattern: "wave",
  },
  {
    title: "[PROJECT TITLE]",
    description: "[PROJECT DESCRIPTION]",
    tech: ["[TECH 1]", "[TECH 2]", "[TECH 3]"],
    github: "[GITHUB URL]",
    demo: "[LIVE DEMO URL]",
    featured: false,
    pattern: "orbit",
  },
];

export const educationInfo = {
  degree: "B.Tech in Computer Science & Engineering",
  university: "Graphic Era Hill University",
  duration: "[2023 — 2027]",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
  ],
};

export const experienceInfo = {
  company: "Future Interns",
  role: "Full Stack Web Development Intern",
  duration: "2026",
  description:
    "Completed task-based, project-driven full-stack web development work as part of the Future Interns program — including designing and building this personal portfolio website (Task 1) with React, Vite, and a fully responsive, accessible UI.",
  highlights: [
    "Built a multi-section React application with reusable, component-based architecture",
    "Implemented responsive, mobile-first layouts with dark/light theme support",
    "Practiced writing clean, documented, production-ready front-end code",
  ],
};

export const contactInfo = {
  heading: "Let's build something together",
  subheading:
    "Open to full-stack internship opportunities, collaborations, and a good conversation about code. Reach out — I usually reply within a day or two.",
};
