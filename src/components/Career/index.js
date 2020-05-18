import React from 'react';

import './Career.css';
import {CareerLeft} from "./CareerLeft";
import {VALUES} from "./CareerValues"
import {CareerRight} from "./CareerRight";
import {CareerYear} from "./CareerYear";

const Career = () => {
  return (
    <div>
      <h1 id="career" className="main-title title">
        My <span className="inline_title">career</span>
      </h1>
      <div className="hr"></div>
      <div className="timeline">
        <div className="timeline_point">
          <span>My Career</span>
        </div>
          <CareerYear year={2020}/>
          <CareerLeft title={VALUES[0].title}  duration={VALUES[0].duration} content={VALUES[0].content} />
          <CareerYear year={2019}/>
          <CareerRight title={VALUES[1].title}  duration={VALUES[1].duration} content={VALUES[1].content} />
          <CareerYear year={2018}/>
          <CareerLeft title={VALUES[2].title}  duration={VALUES[2].duration} content={VALUES[2].content} />
          <CareerYear year={2015}/>
          <CareerRight title={VALUES[3].title}  duration={VALUES[3].duration} content={VALUES[3].content} />
          <CareerYear year={2013}/>
          <CareerLeft title={VALUES[4].title}  duration={VALUES[4].duration} content={VALUES[4].content} />
        <div className="timeline_point smaller last">
          <span>Done</span>
        </div>
      </div>
    </div>
  );
};

export default Career;
