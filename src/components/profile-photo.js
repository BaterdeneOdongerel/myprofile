import me from "./me.jpg"
import React from 'react';
import "./style.css"
export const ProfilePhoto = () => {
  return(
    <div className="hero-image-parent">
      <div className="profile_social_links color_icons">
        <a href="https://demo.mekshq.com/awsm-wp" className="pos_1 twitter_ico" >
          <span>twitter</span>
        </a>
        <a href="https://demo.mekshq.com/awsm-wp" className="pos_2 youtube_ico" >
          <span>youtube</span>
        </a>
        <a href="https://demo.mekshq.com/awsm-wp" className="pos_3 tumblr_ico" >
          <span>tumblr</span>
        </a>
        <a href="https://demo.mekshq.com/awsm-wp" className="pos_4 github_ico" >
          <span>github</span>
        </a>
      </div>
      <div className="hero-image">
        <img className="hero_animate" src={me}/>
      </div>
    </div>
  );
}
