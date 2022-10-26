import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles["navbar-container"]}>
        <li>
          <Link to="/">
            <img src={logo} alt="Tamasha" />
          </Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
