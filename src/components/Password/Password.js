import React from 'react';

import NavBarAlt from "../subcomponents/NavBarAlt/NavBarAlt"
import '../subcomponents/NavBarAlt/NavBarAlt.css'

import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount"

const password = (props) => {

  let password = null;

  password = (
    <div className="pass-wrapper">
      <ScrollToTopOnMount />

      <NavBarAlt>
      </NavBarAlt>

      <div className="pass-content">
        <h1 className="pass-title">Password</h1>
        <form>
          <input className="pass-input" type="password" name="password" />
          <input className="pass-btn" type="submit" value="Submit" />
        </form>
      </div>

    </div>
  );

  return (
      <div className="Password">
        {password}
      </div>
  )
}

export default password;
