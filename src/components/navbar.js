import React from 'react';
import NavOption from './navOption';
import './navbar.css';

const Navbar = (props) => {
    return(
        <div className="navBar">
            <div className="navSection">
                <NavOption
                    title={"Peter Chappy"}
                    route={"/"}
                    />
            </div>
            <div className="navSection">
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
        </div>
    );
};

export default Navbar;