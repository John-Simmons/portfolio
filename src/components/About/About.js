import React from 'react';

import NavBar from "../NavBar/NavBar"
import '../NavBar/NavBar.css'
import BasicInfo from "../BasicInfo/BasicInfo"
import '../BasicInfo/BasicInfo.css'

const about = (props) => {

  let about = null;

  about = (
    <div>
      <NavBar>
      </NavBar>

      <BasicInfo>
      </BasicInfo>
    </div>
  );

  return (
      <div className="About">
        {about}
      </div>
  )
}

export default about;
