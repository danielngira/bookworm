import { NavLink } from "react-router-dom";
import "../styles/navBar.css";
import bookLogo from "../assets/images/book.png";

export default function NavBar() {
  return (
    <>
      <ul className="nav-bar-container">
        <li className="logo">
          <NavLink to="/">
            <img src={bookLogo} alt="Bookworm logo" className="logo-image" />
            Bookworm
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
    </>
  );
}
