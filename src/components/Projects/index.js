import React from 'react';
import redesign from '../../images/redesign.png';
import abcdtask from '../../images/abcdtask.png';
import crowdjob from '../../images/crowdjob.jpg';
import train from '../../images/train.png';

import Project from '../Project';

const projectText1 =
  'Project to build new micro-service reactjs app from design scratch.';
const projectText2 = 'The system module for tracking the loads on the railroad';
const projectText3 = 'Platform where users do data-entry tasks';
const projectText4 =
  'Micro-task crowdsourcing service that enables individuals and businesses to coordinate the use of human intelligence to perform tasks';

const Projects = () => {
  return (
    <>
      <div className="text-center">
        <h1 id="projects" className="main-title title">
          Some of the projects I have{' '}
          <span className="inline_title">worked</span>
        </h1>
        <div className="hr"></div>
      </div>
      <div
        style={{
          backgroundColor: 'rgb(52, 121, 158)',
          display: 'inline-flex',
          paddingBottom: '150px',
        }}
      >
        <Project text={projectText1} title="REDESIGN" icon={redesign} />
        <Project
          text={projectText2}
          title="RAIL Tracking"
          icon={train}
          link={'app.fourkites.com'}
        />
        <Project
          text={projectText3}
          title="ABCDtask"
          icon={abcdtask}
          link={'www.abcdtask.com'}
        />
        <Project
          text={projectText4}
          title="Crowd-job"
          icon={crowdjob}
          link={'www.crowd-job.com'}
        />
      </div>
    </>
  );
};

export default Projects;
