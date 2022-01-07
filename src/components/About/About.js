import React from 'react';

import NavBar from "../subcomponents/NavBar/NavBar"
import '../subcomponents/NavBar/NavBar.css'
import BasicInfo from "../subcomponents/BasicInfo/BasicInfo"
import '../subcomponents/BasicInfo/BasicInfo.css'
import AboutInfo from "../subcomponents/AboutInfo/AboutInfo"
import '../subcomponents/AboutInfo/AboutInfo.css'

import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount"

const about = (props) => {

  let about = null;

  about = (
    <div>
      <ScrollToTopOnMount />

      <NavBar
        active="about">
      </NavBar>

      <BasicInfo>
      </BasicInfo>

      <AboutInfo>
      </AboutInfo>
    </div>
  );

  return (
      <div className="About">
        {about}
      </div>
  )
}

export default about;
