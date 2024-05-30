import React from 'react';
import { NavLink } from 'react-router-dom';

export function Nav(props) {
  return (
    <nav>
      <div id='logo'>
        <img id='logo-img' src='img/uw-logo.png' alt='uw logo' />
        <strong>UW CAMPUS SAFETY </strong>
      </div>
      <ul>
        <li>
          <NavLink to="/home">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/report">
            REPORT
          </NavLink>
        </li>
        <li>
          <NavLink to="/night-safety">
            NIGHT SAFETY
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources">
            RESOURCES
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            PROFILE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}