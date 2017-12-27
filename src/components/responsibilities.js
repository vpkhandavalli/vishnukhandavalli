import React from "react";

const responsibilities = [
  "Technical Advisor",
  "SEO Strategist",
  "Web Development Manager",
  "Scrum Master",
  "Director of Technology",
  "Team Lead",
  "Technical Advisor",
  "Senior front end developer",
];

const Responsibilities = () => (
  <div id="responsibilities">
    {responsibilities.map((responsibility, key) => {
      return (
        <p key={key} className="strong">
          {responsibility}
        </p>
      );
    })}
  </div>
);

export default Responsibilities;
