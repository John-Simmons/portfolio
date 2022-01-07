import React, {Component} from 'react';
import './App.css';
import PrivateRoute from "./PrivateRoute"

import { Route, Switch } from 'react-router-dom';

import Work from "./components/Work/Work"
import './components/Work/Work.css'
import About from "./components/About/About"
import './components/About/About.css'
import CaseStudy from "./components/CaseStudy/CaseStudy"
import './components/CaseStudy/CaseStudy.css'
import Password from "./components/Password/Password"
import './components/Password/Password.css'

class App extends Component {

  state = {

  }

  render(){
    return (
      <div className="App">
          <Switch>
            <Route path="/" component={Work} exact />
            <Route path="/about" component={About} />
            <PrivateRoute path="/case-study" component={CaseStudy} />
            <Route path="/password" component={Password}/>
          </Switch>
      </div>
    );
  }
}

export default App;
