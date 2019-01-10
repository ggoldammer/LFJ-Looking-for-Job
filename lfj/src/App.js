import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Navbar from './components/layout/Navbar.js';

class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <div className="to-be-added">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;