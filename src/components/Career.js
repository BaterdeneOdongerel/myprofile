import React from 'react';
import './style.css';

const Career = () => {
  return (
    <div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <h1 id="career" className="main-title title">
        My <span className="inline_title"> career</span>
      </h1>
      <div className="hr"></div>
      <div className="timeline">
        <div className="timeline_point">
          <span>My Career</span>
        </div>
        <div className="timeline_point smaller">
          <span>2020</span>
        </div>
        <div style={{ float: 'left', width: '49%' }}>
          <div
            className="timeline_unit left"
            style={{ backgroundColor: '#ffe772' }}
          >
            <div className="icon">
              <img
                src="https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/themes/awsm-wp/assets/images/timeline-icons/pin-icon.png"
                alt=""
              />
            </div>

            <div className="arrow" style={{ backgroundColor: '#ffe772' }}></div>
            <div className="data_meta_hold">
              <h3 className="title_with_image">
                Software Engineer at Fourkites INC
              </h3>
              <h4 className="subtitle_with_image">May 2019 - Present</h4>
            </div>

            <p>
              Redesign: a project to build new micro-service front-end react app
              from design scratch. <br />
              * Played an important role in development of the app from
              requirement definition through deployment
              <br />
              * Wrote the test code for the new modules.
              <br />
              Rail Tracking: a system module for tracking the loads on the
              railroad.
              <br />
              * Implemented and updated the software modules under direction of
              Sr. engineer
              <br />
              * Improved the test coverage to 100%
              <br />
              * Re-architected file processing to balance the stress on the
              server resource.
              <br />
            </p>
          </div>
        </div>

        <div className="timeline_point smaller">
          <span>2019</span>
        </div>
        <div style={{ float: 'right', width: '50%' }}>
          <div
            className="timeline_unit right"
            style={{ backgroundColor: '#b4c8ff' }}
          >
            <div className="arrow" style={{ backgroundColor: '#b4c8ff' }}></div>

            <div className="icon">
              <img
                src="https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/themes/awsm-wp/assets/images/timeline-icons/planet-icon.png"
                alt=""
              />
            </div>
            <div className="data_meta_hold">
              <h3 className="title_with_image">
                Started School at Maharishi Univeristy of Management
              </h3>
              <h4 className="subtitle_with_image">Jan 2018 - Feb 2019</h4>
            </div>

            <p>Master Degree in Software Engineering</p>
            <br />
          </div>
        </div>

        <div className="timeline_point smaller">
          <span>2018</span>
        </div>
        <div style={{ float: 'left', width: '49%' }}>
          <div
            className="timeline_unit left"
            style={{ backgroundColor: 'rgb(221, 255, 217)' }}
          >
            <div
              className="arrow"
              style={{ backgroundColor: 'rgb(221, 255, 217)' }}
            ></div>

            <div className="icon">
              <img
                src="https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/themes/awsm-wp/assets/images/timeline-icons/pin-icon.png"
                alt=""
              />
            </div>
            <div className="data_meta_hold">
              <h3 className="title_with_image">
                Sofware Engineer at Unimedia Solution LLC
              </h3>
              <h4 className="subtitle_with_image">Aug 2015 - Jan 2018</h4>
            </div>

            <p>
              Crowd-job is a micro-task specific crowdsourcing service that
              enables individuals and businesses to coordinate the use of human
              intelligence to perform tasks that computers are currently unable
              to do.
              <br />
              www.abstask.com , www.crowd-job.com
              <br />
              Responsibilities:
              <br />
              * Programmed module components using Ruby on Rails, Javascript,
              and Shell.
              <br />
              * Automated unit and integrated testing and front-end testing
              using Capybara and Rspec scenarios.
              <br />
              * Regular maintenance on modules and databases, like speeding up
              and keeping track of logs
              <br />
              * Planning with the manager new features, future releases, and
              issues.
              <br />
              * Improved integration testing company-wide by preparing Gitlab CI
              environment and documentation to support automated testing tools
              and processes
              <br />
            </p>

            <div className="clear"></div>
          </div>
        </div>

        <div className="timeline_point smaller">
          <span>2015</span>
        </div>
        <div style={{ float: 'right', width: '50%' }}>
          <div
            className="timeline_unit right"
            style={{ backgroundColor: 'rgb(255, 214, 214)' }}
          >
            <div
              className="arrow"
              style={{ backgroundColor: 'rgb(255, 214, 214)' }}
            ></div>

            <div className="icon">
              <img
                src="https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/themes/awsm-wp/assets/images/timeline-icons/pin-icon.png"
                alt=""
              />
            </div>
            <div className="data_meta_hold">
              <h3 className="title_with_image">Sofware Engineer at Mobicom</h3>
              <h4 className="subtitle_with_image">Jun 2013 - Jan 2016</h4>
            </div>

            <p>
              Japanese-Mongolian jointly-owned telecommunications company.{' '}
              <br />
              Developed and maintained web service collecting and storing
              employee information. <br />
              Projects: <br />
              • Info Survey: An internal web to take surveys from employees in
              Mobicom. Developed both back and front end <br />
              • MRBT report service: a service to generate and render various
              reports from multimedia ring-back tone system which allows users
              to share their favorite songs with people who call them. <br />
              • Vehicle Tracking: A system to track the travel history of a
              vehicle with the device. Worked on front-end development and
              assisted on database design. <br />
            </p>
          </div>
        </div>
        <div className="timeline_point smaller">
          <span>2013</span>
        </div>
        <div style={{ float: 'left', width: '49%' }}>
          <div
            className="timeline_unit left"
            style={{ backgroundColor: 'rgb(255, 212, 242)' }}
          >
            <div
              className="arrow"
              style={{ backgroundColor: 'rgb(255, 212, 242)' }}
            ></div>

            <div className="icon">
              <img
                src="https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/themes/awsm-wp/assets/images/timeline-icons/planet-icon.png"
                alt=""
              />
            </div>
            <div className="data_meta_hold">
              <h3 className="title_with_image">
                Mongolian University of Science and Technology
              </h3>
              <h4 className="subtitle_with_image">Sep 2009 - Jun 2013</h4>
            </div>
            <p>Bachelor Degree in Computer Science</p>
          </div>
        </div>
        <div className="timeline_point smaller last">
          <span>Done</span>
        </div>
      </div>
    </div>
  );
};

export default Career;
