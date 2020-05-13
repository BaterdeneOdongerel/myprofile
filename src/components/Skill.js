import React from 'react';
import "./style.css"
export const Skill = ({ width, text, tag }) => {
  return(
    <>
      <div className="skill_box">
        <div className="skill_label">{text}<span className="skill_name">{tag}</span></div>
        <div className="skill_level">
          <div className="skill_set" data-skill="95" style={{width: width}}></div>
        </div>
      </div>
    </>
  )
}
