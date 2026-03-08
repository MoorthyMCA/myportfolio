import React from "react";
// import features from "../assets/img/convo.jpg"; // Adjust the path as necessary
import picc from '../assets/img/clients/mypic3.jpg'

const Skills: React.FC = () => (
  <section id="pers-skills" className="skills section-bg">
    <div className="container" data-aos="fade-up">
      <div className="row align-items-center">
        {/* LEFT SIDE: Image */}
        <div
          className="col-lg-6 d-flex justify-content-center"
          data-aos="fade-right"
        >
          <img
            src={picc}
            alt="My Skills"
            className="img-fluid rounded shadow"
            id="mypic3"
            style={{ maxHeight: "650px", objectFit: "contain" }}
          />
        </div>

        {/* RIGHT SIDE: Skills List */}
        <div
          className="col-lg-6 pt-4 pt-lg-0 content"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          {[
            
            {
              icon: "bi bi-option",
              title: "Work Ethic",
              text: "Responsibility, Discipline, Dependability, Commitment, Professionalism.",
            },
            {
              icon: "bi bi-journal-check",
              title: "Communication",
              text: "Written communication, Feedback, Listening.",
            },
         {
    icon: "bi bi-people",
    title: "Collaboration & Teamwork",
    text: "Pair programming, Code reviews, Sharing ideas, Coordinating with designers.",
  },

             {
    icon: "bi bi-person-hearts",
    title: "Team Contribution",
    text: "Collaborating on projects, Knowledge sharing, Conflict resolution in dev teams, Supporting team goals.",
  },

             {
    icon: "bi bi-watch",
    title: "Time Management",
    text: "Prioritizing tasks, Sprint planning, Meeting deadlines, Efficient coding workflow, Managing multiple projects.",
  },
            // --- NEW SKILLS ADDED BELOW ---

            {
    icon: "bi bi-arrows-move",
    title: "Adaptability",
    text: "Learning new things, Adjusting to project requirements, Responsive design adjustments, Staying updated with trends.",
  },

             {
    icon: "bi bi-lightbulb",
    title: "Creativity",
    text: "UI/UX innovation, Designing interactive interfaces, Visual problem solving, Experimenting with layouts, Creative coding solutions.",
  },
          ].map(({ icon, title, text }, idx) => (
            // d-flex aligns icon and text side-by-side
            <div
              className="d-flex align-items-start mt-4"
              data-aos="zoom-in"
              data-aos-delay="150"
              key={idx}
            >
              <div className="icon-box me-3">
                <i
                  className={icon}
                  style={{ fontSize: "32px", color: "#FF6700", lineHeight: 1 }}
                ></i>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "5px",
                    color: "#333",
                  }}
                >
                  {title}
                </h4>
                <p style={{ fontSize: "15px", color: "#848484", margin: 0 }}>
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
