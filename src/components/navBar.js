import { NavLink } from "react-router-dom";
import "../styles/navBar.css";
import bookLogo from "../assets/images/book.png";
import bookWormLogo from "../assets/images/worm.png";

export default function NavBar() {
  return (
    <>
      <div className="fixed-navbar">
        <ul className="nav-bar-container">
          <li className="logo">
            <NavLink to="/">
              <img
                src={bookWormLogo}
                alt="Bookworm logo"
                className="logo-image"
              />
              <span className="logo-half">Book</span>
              <span>worm</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/bookworm/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/bookworm/mybooks">My Books</NavLink>
          </li>
          <li>
            <NavLink to="/bookworm/profile/settings">Settings</NavLink>
          </li>
        </ul>
        <hr></hr>
      </div>
    </>
  );
}
