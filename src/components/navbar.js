import React from 'react';
import NavOption from './navOption';
import './navbar.css';

const Navbar = (props) => {
    return(
        <div className="navBar">
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

export default Navbar;