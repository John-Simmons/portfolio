import React from 'react';
import resume from '../../../assets/JohnSimmonsResume.pdf';

const aboutInfo = (props) => {
  let aboutInfo = null;

  aboutInfo=(
    <div >
      <p className="ai-paragraph">
        <a className="ai-item-wrap" href={resume} target='_blank' rel="noopener noreferrer">
        <h3 className="ai-item">Resume</h3>
        </a>
        <a className="ai-item-wrap" href="https://www.linkedin.com/in/johnsimmonsnyc/" target='_blank' rel="noopener noreferrer">
        <h3 className="ai-item">LinkedIn</h3>
        </a>
        <a className="ai-item-wrap" href="mailto:jsimmons2705@gmail.com">
          <h3 className="ai-item">Email</h3>
        </a>
        <a className="ai-item-wrap" href="https://github.com/John-Simmons/portfolio" target='_blank' rel="noopener noreferrer">
          <h3 className="ai-item">Github</h3>
        </a>
      </p>

    </div>
  );

  return (
    <div className="AboutInfo">
      {aboutInfo}
    </div>
  )
}


export default aboutInfo;
