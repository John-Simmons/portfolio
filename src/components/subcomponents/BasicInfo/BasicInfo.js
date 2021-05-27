import React from 'react';

const basicInfo = (props) => {

  let basicInfo = null;

  basicInfo = (
    <div className="bi-wrapper">

      <h2 className="bi-name ">
        John Simmons
      </h2>
      <p className="bi-info ">
        Product Designer @ Persado
      </p>
      <p className="bi-info ">
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
