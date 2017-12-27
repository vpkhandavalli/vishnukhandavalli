import React from "react";

const Skill = ({ title, length }) => (
  <div className="skill">
    <p className="title">{title}</p>
    <p className="length">{length}</p>
  </div>
);

export default Skill;
