import React from 'react';

export const CareerRight = ({title, duration, content}) => {
    return(
        <>
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
                            {title}
                        </h3>
                        <h4 className="subtitle_with_image">{duration}</h4>
                    </div>
                    <p>
                        {content.map( (value) =>{
                            return (
                                <>
                                    &#9679; {value}
                                    <br/>
                                </>
                            );
                        })}
                    </p>
                    <br />
                </div>
            </div>
        </>
    );
}