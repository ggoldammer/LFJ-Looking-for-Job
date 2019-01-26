import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarSection from './components/content/Navbar/NavbarSection';
import HomePage from './components/content/MainContent/HomePage/HomePage';
import AboutUs from './components/content/MainContent/AboutUs/AboutUs';
import SignIn from './components/content/Navbar/auth/SignIn'
import FooterSection from './components/content/Footer/FooterSection';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarSection />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={AboutUs} />
            <Route path="/signin" exact component={SignIn} />
          </Switch>
          <FooterSection />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;