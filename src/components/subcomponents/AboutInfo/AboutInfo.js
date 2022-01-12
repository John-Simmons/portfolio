import React from 'react';
import resume from '../../../assets/JohnSimmonsResume.pdf';

const aboutInfo = (props) => {
  let aboutInfo = null;

  aboutInfo=(
    <div >
      <p className="ai-bio">I am a detail-oriented product designer, with a background in software engineering, who uses creativity and analytical skill to bring ideas into the real world. As a dedicated lifelong learner, with strong communication skills and a passion for discovering how people think about the world, I seek to solve meaningful problems in thoughtful and insightful ways.</p>
      <p className="ai-paragraph">
        <a className="ai-item-wrap" href={resume} target='_blank' rel="noopener noreferrer">
        <h3 className="ai-item">Resume</h3>
        </a>
        <a className="ai-item-wrap" href="https://www.linkedin.com/in/johnsimmonsnyc/" target='_blank' rel="noopener noreferrer">
        <h3 className="ai-item">LinkedIn</h3>
        </a>
        <a className="ai-item-wrap" href="mailto:john@simmons.ooo">
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
