import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PortfolioContainer from './portfolio/portfolio-container.js';
import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact";
import Blog from "./pages/blog";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Router>
          <div>

          </div>
        </Router>


        <h1>Keshawn Smith React</h1>
        <PortfolioContainer />
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>

      </div>
    );
  }
}
