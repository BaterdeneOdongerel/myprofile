import React from 'react';
import "./style.css"
import {Skill} from "./Skill";
export const MySkills = () => {
  return(
   <div>
     <div style={{width:"100%", height: "200px"}}></div>
     <br/><br/><br/><br/><br/><br/><br/>

     <h2 id="myskills"style={{textAlign:"center"}}>My skills</h2>
     <div className="hr"></div>
     <div style={{marginLeft: "40px", marginRight: "40px"}}>
       <div className="sixcol" style={{width: "48%"}}>
         <Skill text={"Ruby on Rails"} tag={"Pro"} width={"90%"}/>
         <Skill text={"Javascript"} tag={"Pro"} width={"85%"}/>
         <Skill text={"Javascript"} tag={"Pro"} width={"85%"}/>
         <Skill text={"Javascript"} tag={"Pro"} width={"85%"}/>
       </div>
       <div className="sixcol last" style={{width: "48%"}}>
         <Skill text={"Reactjs"} tag={"Pro"} width={"85%"}/>
       </div>
     </div>
   </div>
  )
}
