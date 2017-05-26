import React from 'react';
import PropTypes from 'prop-types';
import NavigationItem from '../NavItem/index.jsx';
import './index.css';

function renderNavItems(navItems) {
  return (
    navItems.map(navItem => <NavigationItem key={navItem} title={navItem} />)
  );
}

function Navigation({ navItems }) {
  return (
    <div className="navbar">
      <div className="navSectionLeft">
        <h1 id={'header'} className="header">C:\\ Chapman</h1>
      </div>
      <ul className="navSectionRight desktop">
        { renderNavItems(navItems) }
      </ul>
      <ul className="navSectionRight mobile">
        <div className="borderMenu" />
      </ul>
    </div>
  );
}

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navigation;
