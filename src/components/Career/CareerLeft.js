import React from 'react';

export const CareerLeft = ({title, duration, content}) => {
    return(
        <>
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
                </div>
            </div>
        </>
    )
}

