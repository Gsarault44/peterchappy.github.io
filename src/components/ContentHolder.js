import React from 'react';
import './ContentHolder.css';

const ContentHolder = (props) =>{
    return(
        <div className="contentHolder">
            {props.children}
        </div>
    );
};

export default ContentHolder;