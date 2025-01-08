import React from "react";
import { skillsData } from "../data/skillsData";
import "../styles/skills.css";

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="skill-category">
      <h2>{title}</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="categories-grid">
        {Object.entries(skillsData).map(([key, category]) => (
          <SkillCategory
            key={key}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
}
