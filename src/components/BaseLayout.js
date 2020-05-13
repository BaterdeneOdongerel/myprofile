import React from 'react';
import Header from './Header';
import ProfilePhoto from './profile-photo';
import NameBox from './nameBox';
import AboutMe from './About';
import MySkills from './MySkills';
import Contact from './Contact';
import Career from './Career';

const BaseLayout = () => {
  return (
    <>
      <Header />
      <ProfilePhoto />
      <NameBox />
      <AboutMe />
      <Career />
      <MySkills />
      <Contact />
    </>
  );
};

export default BaseLayout;
