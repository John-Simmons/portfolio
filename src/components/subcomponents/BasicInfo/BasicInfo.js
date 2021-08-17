import React from 'react';

const basicInfo = (props) => {

  let basicInfo = null;

  basicInfo = (
    <div className="bi-wrapper">

      <h1 className="bi-name ">
        John Simmons
      </h1>
      <p className="bi-info subtext">
        Product Designer @ Persado
      </p>
      <p className="bi-info subtext">
        Currently Based in NYC
      </p>


    </div>
  );

  return (
      <div className="BasicInfo">
        {basicInfo}
      </div>
  )
}

export default basicInfo;
