import React from 'react';
import PropTypes from 'prop-types';
import SocialIcon from './SocialIcon';
import './ContactBlock.css';

function generateSocialIcons(icons) {
  return icons.map(icon => <SocialIcon key={icon.type} icon={icon} />);
}

function ContactBlock({ body }) {
  const { title, icons } = body;
  return (
    <div className="contactBlock">
      <h1>{title}</h1>
      <div className="socialBlock">{generateSocialIcons(icons)}</div>
    </div>
  );
}

ContactBlock.propTypes = {
  body: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default ContactBlock;
