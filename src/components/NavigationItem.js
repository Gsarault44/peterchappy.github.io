import React from 'react';

const style = {

    container : {
        margin: "0px 20px",
        cursor: "pointer",
    },

}

const NavigationItem = ({title}) => {
    return(
        <li>
            <div style={style.container}>
                <h3>{title}</h3>
            </div>
        </li>
    );
}

export default NavigationItem;