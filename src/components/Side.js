import React from 'react';
import './Side.css';

const Side = (props) => {
    return(
        <div className="side">
            <ul className="menu">
                {props.children}
            </ul>
        </div>
    );
}

export default Side;