import React from 'react';
import "./navOption.css";

const NavOption = ({title, route}) =>{
    return (
        <div className="navOptionContainer">
            <a className="navOption" href={route}>{ title }</a>
        </div>
    );
}

export default NavOption;