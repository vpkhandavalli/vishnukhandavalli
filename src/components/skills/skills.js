import React from "react";

import Skill from "./skill";
import JSON from "./skills.json";

const Skills = () => (
  <div id="skills">{JSON.map(skill => <Skill {...skill} />)}</div>
);

export default Skills;
