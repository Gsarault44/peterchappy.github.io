import React, { Component } from 'react';
import ContentHolder from './components/ContentHolder';
import ContentBlock from './components/ContentBlock';
import Navigation from './components/Navigation';
import Footer from './components/Footer.js';
import TypedText from './components/contentblocks/TypedText';
import ContactBlock from './components/contentblocks/ContactBlock';

//Data
import AppData from './content/Content.json';

import './App.css';

const navItems = ["About", "Contact"];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation
          navItems={navItems}
          />
        <ContentHolder>
          <ContentBlock>
            <TypedText 
              body={AppData[0].body} />
          </ContentBlock>
          <ContentBlock>
            <ContactBlock body={AppData[1]} />
          </ContentBlock>
          <Footer/>
        </ContentHolder>
      </div>
    );
  };
};