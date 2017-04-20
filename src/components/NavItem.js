import React from 'react';
import './NavItem.css'

const NavItem = (props) => {
    return(
        <li className="navItem" >
            <a href={props.title}>
                <div>
                    {props.title}
                </div>
            </a>
        </li>
    );
}

export default NavItem;