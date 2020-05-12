import React from 'react';
import "./style.css"
export const AboutMe = () => {
  return(
    <>
      <div className="text-center">
        <h1 className="main-title title">
          About <span className="inline_title">Me</span>
        </h1>
        <div className="hr"></div>
      </div>
      <div className="entry-content-wrapper">

        <h3>I believe that I have the power of an expert to help you succeed and I’m feeling free to think of my future
          colleagues as brilliant and creative people.</h3>


        <div className="separator wide"></div>
      </div>

      <div className="timeline">

        <div className="timeline_point">
          <span>My Career</span>
        </div>
        <div className="timeline_point smaller">
          <span>2013</span>
        </div>

        <div className="timeline_unit left">
          <div className="arrow"></div>

          <div className="icon">
            <img
              src="https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/themes/awsm-wp/assets/images/timeline-icons/pin-icon.png"
              alt=""/>
          </div>
          <div className="data_meta_hold">




            <iframe width="100%" height="341" src="https://www.youtube.com/embed/nThlm51eYL0?showinfo=0" frameBorder="0"
                    allowFullScreen=""></iframe>

            <h3 className="title_with_image">Let’s shoot some video</h3>
          </div>

          <p>Maecenas sit amet suscipit eros. Cras vel dolor dolor, nec dignissim nibh. Fusce purus velit, fermentum non
            pretium at, ultricies et mi. Curabitur cursus lorem ut tortor ultrices vel laoreet neque pharetra. Nulla nec
            ligula eu nunc dignissim dignissim vel in libero. Aenean enim erat, interdum eget adipiscing id, porttitor
            at magna. Mauris nec scelerisque erat.</p>


        </div>

        <div className="timeline_unit right">
          <div className="arrow"></div>

          <div className="icon">
            <img
              src="https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/themes/awsm-wp/assets/images/timeline-icons/pin-icon.png"
              alt=""/>
          </div>
          <div className="data_meta_hold">

            <iframe src="https://player.vimeo.com/video/25198507?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff"
                    width="100%" height="341" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen=""
                    allowFullScreen=""></iframe>
            <h3 className="title_with_image">Featured video, because you requested it</h3>
          </div>

          <p>Etiam non nunc libero. Suspendisse in ipsum risus. Vestibulum vel odio quis nunc pretium imperdiet nec a
            nulla. Ut sed bibendum velit. Integer id mi non risus dapibus condimentum sit amet nec orci. In pulvinar
            velit at eros viverra condimentum. Proin malesuada accumsan elit, auctor consectetur metus vestibulum
            non.</p>


        </div>
        <div className="timeline_point smaller">
          <span>2012</span>
        </div>
        <div className="timeline_unit left">
          <div className="arrow"></div>

          <div className="icon">
            <img
              src="https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/themes/awsm-wp/assets/images/timeline-icons/thunder-icon.png"
              alt=""/>
          </div>
          <div className="data_meta_hold">
            <h3 className="title_with_image">Decided to go back</h3>
            <h4 className="subtitle_with_image">July 2012</h4>
          </div>


          <p>Maecenas sit amet suscipit eros. Cras vel dolor dolor, nec dignissim nibh. Fusce purus velit, fermentum non
            pretium at, ultricies et mi. Curabitur cursus lorem ut tortor ultrices vel laoreet neque pharetra. Nulla nec
            ligula eu nunc dignissim dignissim vel in libero. Aenean enim erat, interdum eget adipiscing id, porttitor
            at magna. Mauris nec scelerisque erat.</p>

          <div className="clear"></div>
          <div className="entry-footer">
            <div className="meta-info">
              <a href="https://demo.mekshq.com/awsm-wp" target="_blank" className="read_more_link">View Details →</a>
            </div>
          </div>

        </div>


        <div className="timeline_point smaller last">
          <span>Done</span>
        </div>

      </div>
    </>
  )
}
