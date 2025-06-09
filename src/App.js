import React, { useState, useEffect } from 'react';
import {
  Mail, Phone, MapPin, Github, Linkedin, Download
} from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const projects = [
    {
      title: "Smart Campus Event Management",
      description: "Built full-stack web app using React.js, Node.js, Express.js, and MongoDB.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      year: "2025",
      category: "Full Stack"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio site built with React and Figma for design.",
      tech: ["React.js", "Figma"],
      year: "2024",
      category: "Frontend"
    }
  ];

  const skills = [
    { name: "C (Basics)", level: 60, category: "Programming" },
    { name: "Data Structures & Algorithms", level: 70, category: "Programming" },
    { name: "React.js", level: 75, category: "Frontend" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "Express.js", level: 70, category: "Backend" },
    { name: "MongoDB", level: 65, category: "Database" },
    { name: "Figma", level: 80, category: "Design" },
    { name: "GitHub", level: 75, category: "Tools" },
    { name: "ChatGPT", level: 85, category: "AI Tools" }
  ];

  const certifications = [
    { name: "Soft Skill Development", issuer: "NPTEL", year: "2024" },
    { name: "Software Testing", issuer: "NPTEL", year: "2024" }
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">Ashwini H.L</div>
          <div className="nav-links">
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Ashwini H.L</h1>
          <p className="hero-subtitle">Computer Science Student & Full Stack Developer</p>
          <p className="hero-description">
            Enthusiastic developer with a strong foundation in coding, full-stack technologies, and design tools.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn-primary">
              View My Work
            </button>
            <a
              href={process.env.PUBLIC_URL + '/assets/Ashwini.pdf'}
              download
              className="btn-secondary"
            >
              <Download size={20} /> Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I am a 3rd-year B.E. Computer Science student at Malnad College of Engineering (CGPA: 8.7).
            Passionate about full-stack development, UI/UX, and problem-solving using modern tools.
          </p>
          <div className="about-details">
            <div><Mail size={20} /> ashuraja021@gmail.com</div>
            <div><Phone size={20} /> +91 6363725792</div>
            <div><MapPin size={20} /> Halebidu, Hassan District, Belur Taluk</div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section-container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
                <p className="skill-category">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <div className="section-container">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <h4>B.E. in Computer Science</h4>
            <p>Malnad College of Engineering, Hassan</p>
            <p>6th Semester | CGPA: 8.7</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Certifications</h2>
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <h4>{cert.name}</h4>
              <p>{cert.issuer} - {cert.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <h2 className="section-title">Contact</h2>
          <p>Feel free to reach out via email or connect through social platforms.</p>
          <div className="contact-links">
            <a href="mailto:ashuraja021@gmail.com"><Mail size={24} /> ashuraja021@gmail.com</a>
            <a href="tel:+916363725792"><Phone size={24} /> +91 6363725792</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/ashwini-hl" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
            <a href="https://linkedin.com/in/ashwinihl" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
