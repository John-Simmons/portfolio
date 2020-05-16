import React from 'react';

const portfolioItem = (props) => {

return (
    <div className="PortfolioItem">
      {props.image}

      <div className="pi-info">
        <h1 className="pi-info-header">{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
)
}

export default portfolioItem;
