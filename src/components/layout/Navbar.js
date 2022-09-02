import { Link } from "react-router-dom";

import "./style.scss";

const Navbar = ({ navbarOpen, closeNav, openNav }) => {
  return (
    <>
      <nav className={`navbar ${navbarOpen && "navbar-open"}`}>
        <Link className="link" onClick={closeNav} to="/rpsls">
          RPSLS
        </Link>
      </nav>
      <div className="navbar-toggle" onClick={openNav}>
        GAME-MENU
      </div>
    </>
  );
};

export default Navbar;
