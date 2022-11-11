import React, { useState } from 'react';
import Menu from './Menu.js';

const menuIcon = "images/IconMenu.svg";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const openMenu = (event) => {
    event.preventDefault();
    setMenuActive(!menuActive);
  }

  return (
    <div id="Navigation">
      <div className="Navbar">
        <div className="NavbarIcons" onClick={openMenu}>
          <p className="MenuIcon">Menu</p>
          <img src={menuIcon} alt="Menu Icon" className="MenuIcon"/>
        </div>
      </div>
      {menuActive ? <Menu/> : null }
    </div>
  );
}

export default Navbar;
