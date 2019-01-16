import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Scraper from "./components/scraper/Scraper.js";
import NavbarPage from './components/layout/NavbarPage.js';
import SearchBar from './components/content/SearchBar.js';
import HomeContainer from './components/content/HomeContainer.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="to-be-added">
          <NavbarPage />
          <HomeContainer />
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;