import React from 'react';
import "./style.css"
export const Skill = ({ width, text, tag, color = "#fefefe"}) => {
  return(
    <>
      <div className="skill_box">
        <div className="skill_label">{text}<span className="skill_name">{tag}</span></div>
        <div className="skill_level">
          <div className="skill_set" data-skill="95" style={{width: width, backgroundColor: "#34799e"}}></div>
        </div>
      </div>
    </>
  )
}


/*

bd7070
705cbf
5cbf72
e4d943
ea6c44
#ee4ed9
6cb7d0
84d66a
cb79ae





*/