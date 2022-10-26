import React, { Link } from 'react-scroll';

export default function Menu() {
  return (
    <div className="Menu">
      <ul className="MenuList">
        <li>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="MaisonLaurierHero" spy={true} smooth={true} offset={50} duration={500}>Art</Link>
        </li>
        <li>
          <Link to="PineappleHero" spy={true} smooth={true} offset={50} duration={500}>Music</Link>
        </li>
        <li>
          <Link to="DemonHero" spy={true} smooth={true} offset={50} duration={500}>Design</Link>
        </li>
        <li>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
