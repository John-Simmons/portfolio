import React from 'react';
import {ReactComponent as Logo} from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

const navBarAlt = (props) => {

  let navBarAlt = null;

  navBarAlt = (
    <div className="nba-wrapper">
      <Link to="/">
        <Logo className="nba-logo"/>
      </Link>

      <div className="nba-nav-items">

        <Link to="/" className="nba-nav-item">&larr; Back</Link>

      </div>

    </div>
  );

  return (
      <div className="NavBarAlt">
        {navBarAlt}
      </div>
  )
}

export default navBarAlt;
