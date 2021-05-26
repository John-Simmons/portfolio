import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const navBar = (props) => {

  let navBar = null;

  navBar = (
    <div className="nb-wrapper">
      <Logo className="nb-logo"/>

      <div className="nb-nav-items">

        <Link to="/" className="nb-nav-item active">Work</Link>

        <Link to="/about" className="nb-nav-item">About</Link>

      </div>

    </div>
  );

  return (
      <div className="NavBar">
        {navBar}
      </div>
  )
}

export default navBar;
