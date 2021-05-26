import React, {Component} from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import ReactTooltip from "react-tooltip";

import Work from "./components/Work/Work"
import './components/Work/Work.css'
import About from "./components/About/About"
import './components/About/About.css'
import ColorSwatch from "./components/ColorSwatch/ColorSwatch"
import './components/ColorSwatch/ColorSwatch.css'
import './components/PortfolioItem/PortfolioItem.css'

class App extends Component {

  state = {

  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Work} exact />
          <Route path="/about" component={About} />
        </Switch>

        <ReactTooltip
        effect="solid"
        />
        <ColorSwatch
          position="cs-btm-r">
        </ColorSwatch>
      </div>
    );
  }
}

export default App;
