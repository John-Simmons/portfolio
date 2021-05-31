import React from 'react';
import {ReactComponent as Logo} from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

const navBar = (props) => {

  let workClass = "nb-nav-item";
  let aboutClass = "nb-nav-item";

  if(props.active === "work"){
    workClass = "nb-nav-item active";
  }else if (props.active === "about"){
    aboutClass = "nb-nav-item active";
  }

  let navBar = null;

  navBar = (
    <div className="nb-wrapper">
      <Link to="/">
        <Logo className="nb-logo"/>
      </Link>

      <div className="nb-nav-items">

        <Link to="/" className={workClass}>Work</Link>

        <Link to="/about" className={aboutClass}>About</Link>

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
