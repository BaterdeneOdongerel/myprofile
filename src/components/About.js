import React from 'react';
import "./style.css"
export const AboutMe = () => {
  return(
    <>
      <div className="text-center">
        <h1 id="about" className="main-title title">
          About <span className="inline_title">Me</span>
        </h1>
        <div className="hr"></div>
      </div>
      <div className="entry-content-wrapper">

      <h3 style={{textAlign: "center"}}>I am Full-stack web developer in Chicago, IL. <br/>
      I have serious passion for creating intuitive, dynamic user experiences, and lag free web development</h3>
      </div>

    </>
  )
}
