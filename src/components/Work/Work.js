import React from 'react';

import NavBar from "../subcomponents/NavBar/NavBar"
import '../subcomponents/NavBar/NavBar.css'
import BasicInfo from "../subcomponents/BasicInfo/BasicInfo"
import '../subcomponents/BasicInfo/BasicInfo.css'
import PortfolioList from "../subcomponents/PortfolioList/PortfolioList"
import '../subcomponents/PortfolioList/PortfolioList.css'

import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount"

const work = (props) => {

  let work = null;

  work = (
    <div>
      <ScrollToTopOnMount />

      <NavBar
        active="work">
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
