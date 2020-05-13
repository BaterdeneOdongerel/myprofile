import React from 'react';
import "./style.css"
export const Header = () => {
  return(
    <div className="main-nav">
      <ul>
        <li><a href={"/#about"}>About</a></li>
        <li><a href={"/#career"}>My Career</a></li>
        <li><a href={"/#myskills"}>Skills</a></li>
        <li><a href={"/#contact"}>Contact</a></li>
      </ul>
    </div>
  )
}
