import React from 'react';
import SocialIcon from './SocialIcon';
import './ContactBlock.css'

const generateSocialIcons = (icons) => {
    return icons.map((icon) => <SocialIcon key={icon.type} icon={icon} /> );
};

const ContactBlock = ({body}) => {
    const {title, icons} = body;
    return(
        <div className="contactBlock">
            <h2>{title}</h2>
            <div className="socialBlock">{generateSocialIcons(icons)}</div>
        </div>
    );
}

export default ContactBlock;