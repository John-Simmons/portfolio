import React from 'react';

const colorswatch = (props) => {
  return (
    <div className="ColorSwatch">
      <div className={props.position}>
        <div data-tip="Designed and Built by John Simmons" className="cs-color-swatches">
          <div className="cs-color-swatch blue">
          </div>
          <div className="cs-color-swatch orange">
          </div>
          <div className="cs-color-swatch off-white">
          </div>
        </div>
      </div>
    </div>
  )
}

export default colorswatch;
