import React from "react";
import Nav from "../Nav";

function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <header className="header">
            <div>
                <h2>Michael Atwood</h2>
            </div>
            <div>
                <Nav
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                ></Nav>
            </div>
        </header>
    );
}

export default Header;