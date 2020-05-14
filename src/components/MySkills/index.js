import React from 'react';
import Skill from '../Skill';

import './MySkills.css';

const MySkills = () => {
  const colors = [
    'rgb(255, 231, 114)',
    'rgb(180, 200, 255)',
    'rgb(221, 255, 217)',
    'rgb(255, 214, 214)',
    'rgb(255, 212, 242)',
  ];
  return (
    <div>
      <h2 id="myskills" style={{ textAlign: 'center' }}>
        My skills
      </h2>
      <div className="hr"></div>
      <div style={{ marginLeft: '40px', marginRight: '40px' }}>
        <div className="sixcol" style={{ width: '48%' }}>
          <Skill
            color={colors[0]}
            text={'Ruby on Rails'}
            tag={'Pro'}
            width={'90%'}
          />
          <Skill
            color={colors[1]}
            text={'Javascript'}
            tag={'Pro'}
            width={'85%'}
          />
          <Skill
            color={colors[2]}
            text={'Java'}
            tag={'Intermidate'}
            width={'70%'}
          />
          <Skill
            color={colors[3]}
            text={'NodeJs'}
            tag={'Intermidate'}
            width={'80%'}
          />
          <Skill
            color={colors[4]}
            text={'Postgres'}
            tag={'Intermidate'}
            width={'75%'}
          />
          <Skill
            color={colors[0]}
            text={'MySql'}
            tag={'Intermidate'}
            width={'80%'}
          />
        </div>
        <div className="sixcol last" style={{ width: '48%' }}>
          <Skill color={colors[1]} text={'Reactjs'} tag={'Pro'} width={'85%'} />
          <Skill
            color={colors[2]}
            text={'Angularjs'}
            tag={'Intermediate'}
            width={'60%'}
          />
          <Skill
            color={colors[3]}
            text={'AWS(Web Services, Lambda, S3, SQS, API)'}
            tag={'Intermediate'}
            width={'70%'}
          />
          <Skill
            color={colors[4]}
            text={'Elastsearch'}
            tag={'Intermediate'}
            width={'50%'}
          />
          <Skill color={colors[0]} text={'GIT'} tag={'Pro'} width={'85%'} />
          <Skill
            color={colors[1]}
            text={'JQuery'}
            tag={'Intermediate'}
            width={'70%'}
          />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
