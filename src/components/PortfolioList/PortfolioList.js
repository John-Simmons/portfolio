import React from 'react';
import PortfolioItem from "../PortfolioItem/PortfolioItem"
import {ReactComponent as PersadoLogo} from '../../assets/persado-logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const portfolioList = (props) => {

  let portfolioList = null;

  if(props.isUnderConstruction){
    portfolioList =(
      <div>
          <FontAwesomeIcon className="pi-image" icon={'tools'} size="5x"/>
          <h1>Under Construction</h1>
          <p>Nothing to see right now but check back later!</p>
      </div>
    );
  } else {
    portfolioList=(
      <div>
        <PortfolioItem
          image={
            <PersadoLogo className="pi-image"></PersadoLogo>}
          title="Portfolio Item 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>

        <PortfolioItem
          image={
            <PersadoLogo className="pi-image"></PersadoLogo>}
          title="Portfolio Item 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>

        <PortfolioItem
          image={
            <PersadoLogo className="pi-image"></PersadoLogo>}
          title="Portfolio Item 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      </div>
    );
  }


  return (
    <div className="PortfolioList">
      {portfolioList}
    </div>
  )
}

export default portfolioList;
