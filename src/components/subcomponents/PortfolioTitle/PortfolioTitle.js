import React from 'react';

const portfolioTitle = (props) => {

  return (
      <div className="PortfolioTitle">
        <div className="pt-info">

          <h1 className="pt-title">{props.title}</h1>

          <div className="pt-company-role">

            <p className="pt-company">{props.company}</p>
            <div className="pt-dot"></div>
            <p className="pt-role">{props.role}</p>

          </div>

        </div>
      </div>
  )
}

export default portfolioTitle;
