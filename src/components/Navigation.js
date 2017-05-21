import React from 'react';
import NavigationItem from './NavigationItem';
import "./Navigation.css"

const renderNavItems = (navItems) => {
    return navItems.map((navItem) => <NavigationItem key={navItem} title={navItem} />);
}

const Navigation = ({navItems}) => {
    return(
        <div className="navbar">
            <div className="navSectionLeft">
                <h1 id={"header"} className="header"> C:\\ Chapman</h1>
            </div>
            <ul className="navSectionRight desktop">
                {renderNavItems(navItems)}
            </ul>
            <ul className="navSectionRight mobile">
                <div className="borderMenu"/>
            </ul>
        </div>
    );
    
}

export default Navigation;