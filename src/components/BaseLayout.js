import React from 'react';
import {Header} from "./Header"
import {ProfilePhoto} from "./profile-photo";
import {NameBox} from "./nameBox";
import {AboutMe} from "./About";
import {MySkills} from "./MySkills";
import {Contact} from "./Contact";
import {Career} from "./Career";
export const BaseLayout = () => {
  return(
    <div>
      <Header/>
      <ProfilePhoto/>
      <NameBox/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <AboutMe/>
      <Career/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <MySkills/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Contact/>
    </div>
  )
}
