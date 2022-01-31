import React from "react";
import { NavLink } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import NavigationContainer from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul className='navList'>
        {mainRoutes.map(({ path, name }) => (
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
