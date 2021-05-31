import React from 'react';

import NavBarAlt from "../subcomponents/NavBarAlt/NavBarAlt"
import '../subcomponents/NavBarAlt/NavBarAlt.css'
import PortfolioTitle from "../subcomponents/PortfolioTitle/PortfolioTitle"
import '../subcomponents/PortfolioTitle/PortfolioTitle.css'
import PortfolioHeader from "../subcomponents/PortfolioHeader/PortfolioHeader"
import '../subcomponents/PortfolioHeader/PortfolioHeader.css'
import PortfolioSubHeader from "../subcomponents/PortfolioSubHeader/PortfolioSubHeader"
import '../subcomponents/PortfolioSubHeader/PortfolioSubHeader.css'

const portfolioItem1 = (props) => {

  let portfolioItem1 = null;

  portfolioItem1 = (
    <div>
      <NavBarAlt>
      </NavBarAlt>

      <PortfolioTitle
        title="Portfolio Item 1"
        company="Persado"
        role="Product Designer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>

      <PortfolioHeader
        title="Section Header"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>

        <PortfolioSubHeader
          title="Section Sub-Header"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>

    </div>
  );

  return (
      <div className="PortfolioItem1">
        {portfolioItem1}
      </div>
  )
}

export default portfolioItem1;
