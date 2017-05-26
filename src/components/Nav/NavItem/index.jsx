import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const NavigationItem = ({ title }) => {
  return (
    <li>
      <div className="container">
        <a href={title}>
          <h3>{title}</h3>
        </a>
      </div>
    </li>
  );
}

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavigationItem;
