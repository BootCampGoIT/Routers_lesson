import React from "react";
import { NavLink } from "react-router-dom";

import NavigationContainer from "./NavigationStyled";

const Navigation = ({ links }) => {
  return (
    <NavigationContainer>
      <ul className='navList'>
        {links.map(({ path, name }) => (
          <li className='navListItem' key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "navItemActive" : "navItem"
              }>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
