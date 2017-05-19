import React from 'react';

const style = {

    container : {
        margin: "0px 20px",
        cursor: "pointer",
    },

}

const NavigationItem = ({title}) => {
    return(
        <div>
            <div style={style.container}>
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default NavigationItem;