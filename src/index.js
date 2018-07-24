import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import './index.css';
import Aboutus from "./Components/about";
import Home from "./Components/home";
import Nav from "./Components/nav";
import Map from "./Components/map";
import Signup from "./Components/signup";
import Login from "./Components/login";
import Finddonors from "./Components/find";
import Donateblood from "./Components/donate";

import registerServiceWorker from './registerServiceWorker';
class Index extends Component {

  render() {
 
    return (
      <Router >
        <div>
         <Nav/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Aboutus} />
            <Route path="/map" component={Map} />
            <Route path="/signup" component={ Signup} />
            <Route path="/donate" component={Donateblood} />
             <Route path="/login" component={Login} />
             <Route path="/find" component={Finddonors} />
          </Switch>
        </div>
      </Router>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
registerServiceWorker();
