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
        <li className='navListItem'>
          <NavLink
            to='profile'
            className={({ isActive }) =>
              isActive ? "navItemActive" : "navItem"
            }>
            Profile
          </NavLink>
        </li>
        <li className='navListItem'>
          <NavLink
            to='signin'
            className={({ isActive }) =>
              isActive ? "navItemActive" : "navItem"
            }>
            Sign In
          </NavLink>
        </li>
        <li className='navListItem'>
          <NavLink
            to='signup'
            className={({ isActive }) =>
              isActive ? "navItemActive" : "navItem"
            }>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
