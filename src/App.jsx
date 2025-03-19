import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css"; // Include styles

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="animated-background"></div>

      {/* Floating Bubbles */}
      <div className="bubble-container">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Page Sections */}
      <div className="relative z-10">
        <section
          id="home"
          className="h-screen flex items-center justify-center"
        >
          <Home />
        </section>
        <section
          id="about"
          className="h-screen flex items-center justify-center"
        >
          <About />
        </section>
        <section
          id="projects"
          className="h-screen flex items-center justify-center"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="h-screen flex items-center justify-center"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
}
