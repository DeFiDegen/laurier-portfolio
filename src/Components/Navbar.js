const menuIcon = "images/IconMenu.svg";

function Navbar() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("clicked");
  }

  return (
    <div className="Navbar">
      <div className="NavbarIcons" onClick={handleClick}>
        <p className="MenuIcon">Menu</p>
        <img src={menuIcon} alt="Menu Icon" className="MenuIcon"/>
      </div>
    </div>
  );
}

export default Navbar;
