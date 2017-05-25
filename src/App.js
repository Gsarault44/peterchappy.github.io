import React from 'react';
import ContentHolder from './components/ContentHolder';
import ContentBlock from './components/ContentBlock';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import TypedText from './components/contentblocks/TypedText';
import ContactBlock from './components/contentblocks/ContactBlock';

//Data
import AppData from './content/Content.json';

import './App.css';

const navItems = ['About', 'Contact'];

function App() {
  return (
    <div className="App">
      <Navigation navItems={navItems} />
      <ContentHolder>
        <ContentBlock>
          <TypedText text={AppData[0].body} />
        </ContentBlock>
        <ContentBlock>
          <ContactBlock body={AppData[1]} />
        </ContentBlock>
        <Footer />
      </ContentHolder>
    </div>
  );
}

export default App;
