import React from 'react';
import resume from '../../../assets/JohnSimmonsResume.pdf';

const aboutInfo = (props) => {
  let aboutInfo = null;

  aboutInfo=(
    <div >
      <a className="ai-item-wrap" href={resume} target='_blank' rel="noopener noreferrer">
        <h1 className="ai-item">Resume</h1>
      </a>

      <a className="ai-item-wrap" href="https://www.linkedin.com/in/johnsimmonsnyc/" target='_blank' rel="noopener noreferrer">
        <h1 className="ai-item">LinkedIn</h1>
      </a>

      <a className="ai-item-wrap" href="mailto:jsimmons2705@gmail.com">
        <h1 className="ai-item">Email</h1>
      </a>

    </div>
  );

  return (
    <div className="AboutInfo">
      {aboutInfo}
    </div>
  )
}


export default aboutInfo;
