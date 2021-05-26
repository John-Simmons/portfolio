import React from 'react';
import PortfolioItem from "../PortfolioItem/PortfolioItem"

const portfolioList = (props) => {
  let portfolioList = null;

  portfolioList=(
    <div>
      <PortfolioItem
        title="Portfolio Item 1"
        company="Persado"
        role="Product Designer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        locked={true}/>

      <PortfolioItem
        title="Portfolio Item 2"
        company="Article"
        role="Product Design"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        locked={false}/>

      <PortfolioItem
        title="Portfolio Item 3"
        company="Persado"
        role="Product Designer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        locked={true}/>
    </div>
  );

  return (
    <div className="PortfolioList">
      {portfolioList}
    </div>
  )
}


export default portfolioList;
