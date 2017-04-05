import React from 'react';
import "./navOption.css";

const NavOption = ({title, route}) =>{
    return (
        <div className="navOptionContainer">
            <a href={route}>
                <h2 className="navOption">{ title }</h2>
            </a>
        </div>
    );
}

export default NavOption;