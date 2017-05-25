import React from 'react';
import PropTypes from 'prop-types';
import './NavigationItem.css';

function NavigationItem({ title }) {
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
  title: PropTypes.oneOf(PropTypes.string).isRequired,
};

export default NavigationItem;
