import React from 'react';

import NavBar from "../NavBar/NavBar"
import '../NavBar/NavBar.css'
import BasicInfo from "../BasicInfo/BasicInfo"
import '../BasicInfo/BasicInfo.css'
import PortfolioList from "../PortfolioList/PortfolioList"
import '../PortfolioList/PortfolioList.css'
import '../PortfolioItem/PortfolioItem.css'

const work = (props) => {

  let work = null;

  work = (
    <div>
      <NavBar>
      </NavBar>

      <BasicInfo>
      </BasicInfo>

      <PortfolioList>
      </PortfolioList>

    </div>
  );

  return (
      <div className="Work">
        {work}
      </div>
  )
}

export default work;
