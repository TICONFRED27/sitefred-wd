import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__ul">
          <li className="navbar__li">
            <a href="#">Acceuil</a>
          </li>
          <li className="navbar__li">
            <a href="#">Ateliers</a>
          </li>
          <li className="navbar__li">
            <a href="#">Catalogue</a>
          </li>
          <li className="navbar__li">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
