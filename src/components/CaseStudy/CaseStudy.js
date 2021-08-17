import React from 'react';

import NavBarAlt from "../subcomponents/NavBarAlt/NavBarAlt"
import '../subcomponents/NavBarAlt/NavBarAlt.css'

import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount"

const caseStudy = (props) => {

  let caseStudy = null;

  caseStudy = (
    <div className="cs-wrapper">
      <ScrollToTopOnMount />

      <NavBarAlt>
      </NavBarAlt>

      <div className="cs-content">
        <h1 className="cs-title">Portfolio Item 1 with a long title to test</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br/>
          <br/>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2>Section Header</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br/>
          <br/>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h3 className="subheader">Section Sub-header</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br/>
          <br/>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

      </div>

    </div>
  );

  return (
      <div className="CaseStudy">
        {caseStudy}
      </div>
  )
}

export default caseStudy;
