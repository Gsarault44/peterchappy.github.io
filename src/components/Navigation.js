import React from 'react';
import NavigationItem from './NavigationItem';

const styles = {
    navbar : {
        width: "100%",
        height: "10%",
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        alignItems: "align-self",
        justifyContent: "space-around",
        backgroundColor: "#1E1E1E",
        color: "#fff",
        padding: "20px 0"
    },

    navSectionLeft : {
        height: "100%",
        display: "flex",
        alignSelf: "flex-start",
        alignContent: "space-around",
        flexDirection: "row",
        color: "#fff",
    },

    navSectionRight: {
        height: "100%",
        display: "flex",
        alignSelf: "flex-end",
        alignContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
        color: "#fff",
    },

    header: {
        //TODO figure out ::after
    }
}

const renderNavItems = (navItems) => {
    return navItems.map((navItem) => {
        return(
            <NavigationItem key={navItem} title={navItem} />
        )
    });
}

const Navigation = ({navItems}) => {

    const { navbar, navSectionLeft, header, navSectionRight } = styles;

    return(
        <div style={navbar}>
            <div style={navSectionLeft}>
                <h1 id={"header"} style={header}> C:\\ Chapman</h1>
            </div>
            <ul style={navSectionRight}>
                {renderNavItems(navItems)}
            </ul>
        </div>
    );
    
}

export default Navigation;