import React, { Link } from 'react-scroll';

export default function Menu() {
  return (
    <div id="Menu">
      <ul className="MenuList">
        <li>
          <Link activeClass="activeMenu" to="Hero" spy={true} smooth={true} offset={-70} duration={500} className="menuItem">Home</Link>
        </li>
        <li>
          <Link activeClass="activeMenu" to="MaisonLaurierHero" spy={true} smooth={true} offset={-20} duration={500} className="menuItem">Art</Link>
        </li>
        <li>
          <Link activeClass="activeMenu" to="PineappleHero" spy={true} smooth={true} offset={0} duration={500} className="menuItem">Music</Link>
        </li>
        <li>
          <Link activeClass="activeMenu" to="DemonHero" spy={true} smooth={true} offset={0} duration={500} className="menuItem">Design</Link>
        </li>
        <li>
          <Link activeClass="activeMenu" to="Contact" spy={true} smooth={true} offset={50} duration={500} className="menuItem">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
