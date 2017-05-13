import React from 'react';

const style = {
    margin: "0px 20px",
}

const NavigationItem = ({title}) => {
    return(
        <div style={style}>
            <h3>{title}</h3>
        </div>
    );
}

export default NavigationItem;