import React, {Component} from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Work from "./components/Work/Work"
import './components/Work/Work.css'
import About from "./components/About/About"
import './components/About/About.css'
import CaseStudy from "./components/CaseStudy/CaseStudy"
import './components/CaseStudy/CaseStudy.css'

class App extends Component {

  state = {

  }

  render(){
    return (
      <div className="App">
          <Switch>
            <Route path="/" component={Work} exact />
            <Route path="/about" component={About} />
            <Route path="/case-study" component={CaseStudy} />
          </Switch>
      </div>
    );
  }
}

export default App;
