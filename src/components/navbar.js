import React from 'react';
import NavOption from './navOption';

const Navbar = (props) => {
    return(
        <div style={styles}>
            <NavOption
                title={"Home"}
                route={"/"}
                />
            <NavOption
                title={"Resume"}
                route={"/resume"}
                />
            <NavOption
                title={"Portfolio"}
                route={"/portfolio"}
                />
            <NavOption
                title={"Blog"}
                route={"/blog"}
                />
        </div>
    );
};

const styles = {
    display : "flex",
    flex : 1,
    height: 50,
    backgroundColor: "#99B898",
    boxShadow: "0 1px 1px 0 #2A363B"
};

export default Navbar;