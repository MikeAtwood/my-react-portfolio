import React, { useState } from "react";
import Nav from "../Nav";

function Header() {
    const [categories] = useState(["about", "portfolio", "contact", "resume"]);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <header>
            <h2>Michael Atwood</h2>
            <Nav>
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            </Nav>
        </header>
    );
}

export default Header;