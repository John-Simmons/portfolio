import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const portfolioItem = (props) => {

  let lockIcon = null;

  if(props.locked){
    lockIcon = (<FontAwesomeIcon icon={"lock"} size="1x" className="pi-lock-icon"/>);
  }else{
    lockIcon = "";
  }

  return (
      <div className="PortfolioItem">
        <div className="pi-info">

          <h1 className="pi-title">{props.title}</h1>

          <div className="pi-company-role">

            <p className="pi-company">{props.company}</p>
            <div className="pi-dot"></div>
            <p className="pi-role">{props.role}</p>

          </div>

          <p className="pi-desc">{props.description}</p>

          <Link to={props.route} className="pi-btn-wrapper">
            <btn className="btn-primary pi-see-more">Read More{lockIcon}</btn>
          </Link>

        </div>
      </div>
  )
}

export default portfolioItem;
