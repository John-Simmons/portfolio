import React from 'react';

const colorswatch = (props) => {
  return (
    <div className="ColorSwatch">
      <div className={props.position}>
        <div data-tip="Built by John Simmons" className="cs-color-swatches">
          <a
            href="https://github.com/John-Simmons/portfolio" 
            target='_blank'
            rel="noopener noreferrer">
            <div className="cs-color-swatch blue">
            </div>
            <div className="cs-color-swatch orange">
            </div>
            <div className="cs-color-swatch off-white">
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default colorswatch;
