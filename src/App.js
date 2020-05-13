import React, {Component} from 'react';
import './App.css';

import logo from './assets/logo.png';
import resume from './assets/JohnSimmonsResume.pdf';

import 'font-awesome/css/font-awesome.min.css'

import ReactTooltip from "react-tooltip";

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="a-header">

          <div className="a-logo">
            <img src={logo} width="128" alt='logo'/>
          </div>

          <div className="a-info">
            <h1 className="a-info-header">
              John Simmons
            </h1>
            <p className="a-info-text">
              Product Designer at Persado
            </p>
            <p className="a-info-text">
              Currently Based in NYC
            </p>
          </div>

          <div className="a-action-btns">
            <a className="a-action-btn" href={resume} target='_blank' rel="noopener noreferrer">
              <i className="fa fa-file fa-2x"></i>
              <p className="a-action-btn-label">Resumé</p>
            </a>
            <a className="a-action-btn" href="https://www.linkedin.com/in/johnsimmonsnyc/" target='_blank' rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-2x"></i>
              <p className="a-action-btn-label">Linkedin</p>
            </a>
            <a className="a-action-btn" href="mailto:jsimmons2705@gmail.com">
              <i className="fa fa-envelope fa-2x"></i>
              <p className="a-action-btn-label">Email</p>
            </a>
          </div>

          <div data-tip="Designed and Built by John Simmons" className="a-color-swatches">
            <div className="a-color-swatch blue">
            </div>
            <div className="a-color-swatch orange">
            </div>
            <div className="a-color-swatch yellow">
            </div>
          </div>
        </header>
        <ReactTooltip place="left" effect="solid"/>
      </div>
    );
  }
}

export default App;
