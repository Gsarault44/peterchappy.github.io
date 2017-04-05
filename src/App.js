import React, { Component } from 'react';
import './App.css';

import ContentBlock from './components/contentBlock'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <div className="contentContainer">
            <ContentBlock/>
            <ContentBlock/>
            <ContentBlock/>
            <ContentBlock/>
            <ContentBlock/>
          </div>
      </div>
    );
  }
}

export default App;
