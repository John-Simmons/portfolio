import React from 'react';

const portfolioHeader = (props) => {

  return (
      <div className="PortfolioHeader">

          <h2 className="ph-title">{props.title}</h2>

          <p>{props.description}</p>

      </div>
  )
}

export default portfolioHeader;
