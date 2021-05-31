import React, {Component} from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Work from "./components/Work/Work"
import './components/Work/Work.css'
import About from "./components/About/About"
import './components/About/About.css'
import PortfolioItem1 from "./components/PortfolioItem1/PortfolioItem1"
import './components/PortfolioItem1/PortfolioItem1.css'

class App extends Component {

  state = {

  }

  render(){
    return (
      <div className="App">
          <Switch>
            <Route path="/" component={Work} exact />
            <Route path="/about" component={About} />
            <Route path="/portfolio-item-1" component={PortfolioItem1} />
          </Switch>
      </div>
    );
  }
}

export default App;
