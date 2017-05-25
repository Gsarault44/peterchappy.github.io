import React from 'react';
import PropTypes from 'prop-types';
import './SocialIcon.css';

function SocialIcon({ icon }) {
  const { link, img, type } = icon;

  return (
    <div className="socialIcon">
      <a href={link}>
        <img src={img} alt={type} />
      </a>
    </div>
  );
}

SocialIcon.propTypes = {
  icon: PropTypes.shape({
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default SocialIcon;
