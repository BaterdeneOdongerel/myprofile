import React from 'react';
import Header from './Header';
import ProfilePhoto from './ProfilePhoto';
import NameBox from './NameBox';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import Contact from './Contact';
import Career from './Career';
import Projects from './Projects';

import './style.css';

const BaseLayout = () => {
  return (
    <>
      <Header />
      <ProfilePhoto />
      <NameBox />
      <AboutMe />
      <Career />
      <MySkills />
      <Projects />
      <Contact />
    </>
  );
};

export default BaseLayout;
