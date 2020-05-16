import React, {Component} from 'react';
import './App.css';

import ReactTooltip from "react-tooltip";

import AboutMe from "./components/AboutMe/AboutMe"
import './components/AboutMe/AboutMe.css'
import PortfolioList from "./components/PortfolioList/PortfolioList"
import './components/PortfolioList/PortfolioList.css'
import ColorSwatch from "./components/ColorSwatch/ColorSwatch"
import './components/ColorSwatch/ColorSwatch.css'
import './components/PortfolioItem/PortfolioItem.css'

class App extends Component {

  state = {
        isAboutOpen: true,
    }

  toggleAbout = () => {
    //const stateCopy = [...this.state];
    if(this.state.isAboutOpen){
      this.setState(
        { isAboutOpen: false }
      );
    } else{
      this.setState(
        { isAboutOpen: true }
      );
    }
  }

  render(){
    return (
      <div className="App">
        <AboutMe
          isAboutOpen={this.state.isAboutOpen}
          toggleAbout={this.toggleAbout}
        ></AboutMe>

        {!this.state.isAboutOpen && (
          <PortfolioList></PortfolioList>
        )}

        <ColorSwatch
          position="cs-btm-r">
        </ColorSwatch>

        <ReactTooltip
        effect="solid"
      />
      </div>
    );
  }
}

export default App;
