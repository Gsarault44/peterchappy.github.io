import React from 'react';
import './SocialIcon.css';

const SocialIcon = ({icon}) => {

    const {link, img, type} = icon;

    return(
        <div className="socialIcon">
            <a href={link}>
                <img src={img} alt={type} />
            </a>
        </div>
    )
}

export default SocialIcon;