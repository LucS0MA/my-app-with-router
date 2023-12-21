import Logo from "../assets/Logo2.png";
import { Link } from "react-router-dom";
import "../components/NavBar.css";

function NavBar() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={Logo} className="Logo1" alt="LogoTest" />
        </Link>
        <ul className="head-menu">
          <Link to="/">
            <li> Home </li>
          </Link>
          <Link to="/About">
            <li> About </li>
          </Link>
          <Link to="/Gallery/1">
            <li> Music </li>
          </Link>
          <Link to="/Gallery/2">
            <li> Movies </li>
          </Link>
          <Link to="/Gallery/3">
            <li> Various </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
