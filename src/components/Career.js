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
              &#9679; Built react components in redesign project.
              <br />
              &#9679; Wrote the test code for the new modules.
              <br />
              &#9679; Implemented and updated the rail tracking modules under direction of
              Sr. engineer
              <br />
              &#9679; Improved the test coverage in rail tracking system to 100%
              <br />
              &#9679; Re-architected file processing of rail-worker module to balance the stress on the
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
                  
&#9679; Programmed module components using Ruby on Rails, Javascript, and Shell.
   <br />
&#9679; Automated unit and integrated testing and front-end testing using Capybara and Rspec scenarios.
   <br />
&#9679; Regular maintenance on modules and databases, speeding up the features.
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
                &#9679; Built a web info app to gather surveys from employees based on design specification.
     <br />
&#9679; Developed a MRBT report service to generate and render various reports from multimedia ring-back tone
system
   <br />
            </p>
          </div>
        </div>
        <div className="timeline_point smaller">
          <span>2013</span>
        </div>
        <div style={{ float: 'left', width: '49%' }}>
          <div
            className="timeline_unit left"
            style={{ backgroundColor: 'rgb(142, 248, 144)' }}
          >
            <div
              className="arrow"
              style={{ backgroundColor: 'rgb(142, 248, 144)' }}
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
