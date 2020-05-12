import React from 'react';
import {Header} from "./Header"
import {ProfilePhoto} from "./profile-photo";
import {NameBox} from "./nameBox";
import {AboutMe} from "./About";
export const BaseLayout = () => {
  return(
    <div>
      <Header/>
      <ProfilePhoto/>
      <NameBox/>
      <AboutMe/>
    </div>
  )
}
