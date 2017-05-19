import React, { Component } from 'react';
import Navigation from './components/Navigation';
import ContentHolder from './components/ContentHolder';
import ContentBlock from './components/ContentBlock';
import './App.css';

const navItems = ["About", "Work", "Portfolio", "Contact"];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation
          navItems={navItems}
          />
        <ContentHolder>
          <ContentBlock>Test</ContentBlock>
          <ContentBlock>Test</ContentBlock>
          <ContentBlock>Test</ContentBlock>
          <ContentBlock>Test</ContentBlock>
        </ContentHolder>
      </div>
    );
  };
};