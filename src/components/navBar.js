import { NavLink } from "react-router-dom";
import "../styles/navBar.css";

export default function NavBar() {
  return (
    <>
      <ul className="nav-bar-container">
        <li className="logo">
          <NavLink to="/">Bookworm</NavLink>
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
