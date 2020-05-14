import React from 'react';

const Contact = () => {
  return (
    <>
      <h1 id="contact" className="main-title title">
        Contact <span className="inline_title">Info</span>
      </h1>
      <div className="hr"></div>
      <div
        style={{
          marginLeft: '50px',
          height: '400px',
          fontSize: '25px',
          color: 'black',
        }}
      >
        Email: baterdene.odon@gmail.com
        <br />
        Phone: +1 319 614 0181
      </div>
    </>
  );
};

export default Contact;
