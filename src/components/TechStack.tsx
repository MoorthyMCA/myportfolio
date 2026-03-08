import React from "react";

const techData = [
  // --- FRONTEND DEVELOPMENT SKILLS ---
  {
    icon: "bi bi-code-slash",
    title: "HTML5",
    description:
      "Semantic markup, accessibility, and SEO-friendly structures for modern web applications.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: "bi bi-palette",
    title: "CSS3",
    description:
      "Responsive layouts, Flexbox, Grid, animations, transitions, and modern styling techniques.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: "bi bi-bootstrap",
    title: "Bootstrap 5",
    description:
      "Rapid development of responsive layouts, UI components, and utilities with mobile-first design principles.",
    link: "https://getbootstrap.com/",
  },
  {
    icon: "bi bi-lightning-charge",
    title: "JavaScript (ES6+)",
    description:
      "DOM manipulation, event handling, asynchronous programming, API integration, and modern JavaScript features.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: "bi bi-react",
    title: "React.js",
    description:
      "Component-based architecture, Hooks, state management, reusable UI components, and single-page application development.",
    link: "https://reactjs.org/",
  },
  {
    icon: "bi bi-stack",
    title: "React Redux",
    description:
      "Managing global application state with Redux, integrating with React using Hooks and the Redux Toolkit for scalable apps.",
    link: "https://redux.js.org/",
  },
  {
    icon: "bi bi-phone",
    title: "Responsive Design",
    description:
      "Creating mobile-first layouts and cross-device compatible websites using media queries and flexible grids.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
  },
  {
    icon: "bi bi-brush",
    title: "UI/UX Design",
    description:
      "Designing user-centric interfaces, wireframing, prototyping, and implementing visually appealing designs.",
    link: "https://www.interaction-design.org/literature/topics/ui-design",
  },
  {
    icon: "bi bi-lightbulb",
    title: "Problem Solving & Creativity",
    description:
      "Debugging, optimizing performance, building innovative solutions, and adapting to new frontend technologies.",
    link: "https://www.frontendmentor.io/",
  },
  {
    icon: "bi bi-git",
    title: "Git & GitHub",
    description:
      "Version control, collaborative workflows, branching strategies, and managing code repositories for projects.",
    link: "https://git-scm.com/",
  },
];

const TechStack: React.FC = () => (
  <section id="skills" className="prg">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Skills</h2>
        <p>Frontend Development & Design Tools</p>
      </div>

      <div className="row">
        {techData.map((tech, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay={100 + index * 100}
          >
            <div className="icon-box">
              <div className="icon">
                <i className={tech.icon}></i>
              </div>
              <h4>
                <a href={tech.link} target="_blank" rel="noopener noreferrer">
                  {tech.title}
                </a>
              </h4>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;