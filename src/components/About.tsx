import React from "react";
// import image from "../assets/img/moorthi.png";
import mypic from '../assets/img/clients/mypic-2.jpg'

const About: React.FC = () => (
  <section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="row align-items-stretch">
        {/* Image Column */}
        <div
          className="col-lg-6 order-1 order-lg-2"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="h-100 w-full flex items-center justify-center overflow-hidden pointer-events-none select-none">
            <img
              src={mypic}
              className="img-fluid w-full object-cover"
              onContextMenu={(e) => e.preventDefault()}
              alt="MSR"
              id="mypic2"
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>

        {/* Content Column */}
        <div
          className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content d-flex flex-column justify-content-center"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h3>Summary</h3>
          <ul className="space-y-4 text-gray-600 text-lg">
            <li>
              <i className="bi bi-briefcase-fill me-2 text-primary"></i>
              Frontend Developer and Web Designer with strong expertise in <strong>HTML, CSS, Bootstrap, JavaScript, Redux</strong>, and{" "}
              <strong>React.js</strong>, building responsive and interactive
              user interfaces.
            </li>
            <li>
              <i className="bi bi-code-slash me-2"></i>
              Skilled in creating modern, pixel-perfect designs and
              implementing dynamic web applications that deliver excellent user
              experiences across devices.
            </li>
            <li>
              <i className="bi bi-palette-fill me-2 text-primary"></i>
              Experienced in translating UI/UX designs into clean, reusable,
              and maintainable code while following best practices for
              accessibility and performance optimization.
            </li>
            <li>
              <i className="bi bi-bootstrap-fill me-2"></i>
              Proficient in leveraging <strong>Bootstrap</strong> and
              component-based architecture in React to accelerate development
              of responsive layouts and interactive elements.
            </li>
            <li>
              <i className="bi bi-people-fill me-2 text-primary"></i>
              Collaborative team player passionate about continuous learning,
              exploring emerging frontend technologies, and delivering
              high-quality solutions that enhance business outcomes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;