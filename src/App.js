import React, { Component } from 'react';
import Navigation from './components/Navigation'
import './App.css';

const navItems = ["About", "Work", "Portfolio", "Contact"];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation
          navItems={navItems}
          />
      </div>
    );
  };
};