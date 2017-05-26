import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function ContentBlock(props) {
  return (
    <div className="contentBlock">
      <div className="contentBlockFlexContainer"> {props.children} </div>
    </div>
  );
}

ContentBlock.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContentBlock;
