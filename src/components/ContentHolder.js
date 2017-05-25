import React from 'react';
import PropTypes from 'prop-types';
import './ContentHolder.css';

function ContentHolder(props) {
  return <div className="contentHolder"> {props.children} </div>;
}

ContentHolder.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ContentHolder;
