import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Resume from './Resume';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
