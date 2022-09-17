import React, {useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const categories = ["about", "portfolio", "contact", "resume"];
   return (
    <header>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li className="mx-2" key={category}>
              <a href={"#" + category} className="mx-2">
                {capitalizeFirstLetter(category)}
              </a>
            </li>
          ))}
        </ul>
     </nav>
    </header>
  );
}

export default Nav;