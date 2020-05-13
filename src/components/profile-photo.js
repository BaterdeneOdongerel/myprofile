import me from './me.jpg';
import React from 'react';
import './style.css';
const ProfilePhoto = () => {
  return (
    <div className="hero-image-parent">
      <div className="profile_social_links color_icons">
        <a
          href="https://www.facebook.com/bati.odon"
          className="pos_1 twitter_ico"
        >
          <span>facebook</span>
        </a>
        <a
          href="https://github.com/BaterdeneOdongerel"
          className="pos_2 youtube_ico"
        >
          <span>github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/baterdene-odongerel/"
          className="pos_3 tumblr_ico"
        >
          <span>lin</span>
        </a>
        <a href="https://twitter.com/bati.odon" className="pos_4 github_ico">
          <span>twitter</span>
        </a>
      </div>
      <div className="hero-image">
        <img className="hero_animate" src={me} />
      </div>
    </div>
  );
};

export default ProfilePhoto;
