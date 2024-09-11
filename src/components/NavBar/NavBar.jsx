import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="nav-container">
      <nav className="nav container">
        <div className="nav-logo">
          <img src="/nav_logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link>Characters</Link>
          </li>
          <li>
            <Link>Localization</Link>
          </li>
          <li>
            <Link>Episodes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
