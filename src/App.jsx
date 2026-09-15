import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <ThemeProvider>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
