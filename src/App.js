import React, { Component } from 'react';
import './App.css';

import NavItem from './components/NavItem';
import Side from './components/Side';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Side>
          <NavItem title="Home"/>
          <NavItem title="Projects"/>
          <NavItem title="Work"/>
          <NavItem title="Blog"/>
          <NavItem title="Contact"/>
        </Side>
      </div>
    );
  };
};