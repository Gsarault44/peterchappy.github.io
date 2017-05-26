import React from 'react';
import PropTypes from 'prop-types';
import './NavigationItem.css';

function NavigationItem({ title }) {
  return (
    <li className="navItemContainer">
      <a href={title}>
        <h3>{title}</h3>
      </a>
    </li>
  );
}

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavigationItem;
