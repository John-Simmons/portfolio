import React from 'react';
import resume from '../../../assets/JohnSimmonsResume.pdf';

let resumeHtml = (<a className="ai-item-wrap" href={resume} target='_blank' rel="noopener noreferrer">
  <h1 className="ai-item">Resume</h1>
</a>
);

let linkedinHtml= (<a className="ai-item-wrap" href="https://www.linkedin.com/in/johnsimmonsnyc/" target='_blank' rel="noopener noreferrer">
  <h1 className="ai-item">LinkedIn</h1>
</a>
);

let emailHtml = (<a className="ai-item-wrap" href="mailto:jsimmons2705@gmail.com">
  <h1 className="ai-item">Email</h1>
</a>
);

let githubHtml= (<a className="ai-item-wrap" href="https://github.com/John-Simmons/portfolio" target='_blank' rel="noopener noreferrer">
  <h1 className="ai-item">Github</h1>
</a>
);

const aboutInfo = (props) => {
  let aboutInfo = null;

  aboutInfo=(
    <div >
      <p className="ai-paragraph">
        If you would like to learn more about me, checkout my {resumeHtml}.<br/>Message me on {linkedinHtml} or shoot me an {emailHtml} to say hi.<br/>Go to my {githubHtml} to see the code I wrote to build this site.
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
