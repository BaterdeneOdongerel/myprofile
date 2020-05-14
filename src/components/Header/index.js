import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="main-nav">
      <ul>
        <li>
          <a href={'/#profile'}>Profile</a>
        </li>
        <li>
          <a href={'/#about'}>About</a>
        </li>
        <li>
          <a href={'/#career'}>My Career</a>
        </li>
        <li>
          <a href={'/#myskills'}>Skills</a>
        </li>
        <li>
          <a href={'/#projects'}>Projects</a>
        </li>
        <li>
          <a href={'/#contact'}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
