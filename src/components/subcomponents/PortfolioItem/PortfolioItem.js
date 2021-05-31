import React from 'react';
import { Link } from 'react-router-dom';

const portfolioItem = (props) => {

  return (
      <div className="PortfolioItem">
        <div className="pi-info">

          <div className="pi-info-header">

            <h1 className="pi-title">{props.title}</h1>

            <div className="pi-company-role">

              <p className="pi-company">{props.company}</p>
              <div className="pi-dot"></div>
              <p className="pi-role">{props.role}</p>

            </div>

          </div>

          <p>{props.description}</p>

          <Link to={props.route}>
            <btn className="btn-primary pi-see-more">Read More</btn>
          </Link>

        </div>
      </div>
  )
}

export default portfolioItem;
