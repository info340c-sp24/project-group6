import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export function Nav() {
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

export function MobileNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="mobile-nav">
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src="img/menu-icon.png" alt="Menu" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <NavLink to="/home" onClick={handleClose}>
            HOME
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/report" onClick={handleClose}>
            REPORT
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/night-safety" onClick={handleClose}>
            NIGHT SAFETY
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/resources" onClick={handleClose}>
            RESOURCES
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/profile" onClick={handleClose}>
            PROFILE
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}