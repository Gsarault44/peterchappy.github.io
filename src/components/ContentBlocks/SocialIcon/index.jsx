import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const SocialIcon = ({ ...props }) => {
  console.log({...props})
  return (
    <div className="socialIcon">
      <a href={props.icon.link}>
        <img src={props.icon.img} alt={props.icon.type} />
      </a>
    </div>
  );
}

SocialIcon.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default SocialIcon;
