import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <div className="to-be-added">
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
