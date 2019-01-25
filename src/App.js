import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarSection from './components/content/Navbar/NavbarSection';
import MainContainer from './components/content/MainContent/MainContainer';
import FooterSection from './components/content/Footer/FooterSection'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="to-be-added">
          <NavbarSection />
          <MainContainer />
          <FooterSection />
          <Switch>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;