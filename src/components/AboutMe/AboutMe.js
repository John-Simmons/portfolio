import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import resume from '../../assets/JohnSimmonsResume.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const aboutMe = (props) => {

let aboutMe = null;

  if(props.isAboutOpen){
    aboutMe = (
      <div className="am-wrapper bg">
        <Logo className="am-logo bg"/>

        <div className="am-info">
          <h1 className="am-info-header">
            John Simmons
          </h1>
          <p className="am-info-text">
            Product Designer at Persado
          </p>
          <p className="am-info-text">
            Currently Based in NYC
          </p>
        </div>

        <div className="am-action-btns">
          <a className="am-action-btn" href={resume} target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={'file'} size="3x"/>
            <p className="am-action-btn-label">Resumé</p>
          </a>
          <a className="am-action-btn" href="https://www.linkedin.com/in/johnsimmonsnyc/" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/>
            <p className="am-action-btn-label">Linkedin</p>
          </a>
          <a className="am-action-btn" href="mailto:jsimmons2705@gmail.com">
            <FontAwesomeIcon icon={'envelope'} size="3x"/>
            <p className="am-action-btn-label">Email</p>
          </a>
        </div>

        <div className='am-open-portfolio' onClick={props.toggleAbout}>
          <FontAwesomeIcon
          icon={'chevron-up'}
          size="3x"
          className="am-tray-icon open"/>

        <p className="am-op-text">Portfolio</p>
        </div>

      </div>
    );
  } else {
    aboutMe = (
      <div className="am-wrapper sm">
        <Logo className="am-logo sm"/>

        <div
          className="am-info sm"
          onClick={props.toggleAbout}>
          <h2 className="am-info-header sm">
            John Simmons
          </h2>
          <FontAwesomeIcon
            icon={'chevron-down'}
            size="2x"
            className="am-icon"/>
        </div>
      </div>
    );
  }


  return (
      <div className="AboutMe">
        {aboutMe}
      </div>
  )
}

export default aboutMe;
