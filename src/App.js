import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
