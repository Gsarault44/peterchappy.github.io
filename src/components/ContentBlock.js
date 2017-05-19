import React from 'react';
import './ContentBlock.css'

const ContentBlock = (props) => {
    return (
        <div className="contentBlock">
            <div className="contentBlockFlexContainer">
                {props.children}
            </div>
        </div>
    );
}

export default ContentBlock;