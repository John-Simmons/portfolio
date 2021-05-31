import React from 'react';

const portfolioSubHeader = (props) => {

  return (
      <div className="PortfolioSubHeader">

          <h4 className="psh-title">{props.title}</h4>

          <p>{props.description}</p>

      </div>
  )
}

export default portfolioSubHeader;
