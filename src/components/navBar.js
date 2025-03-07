import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/profile" end>
        Profile
      </NavLink>
      <NavLink to="/mybooks" end>
        My Books
      </NavLink>
      <NavLink to="/profile/settings" end>
        Settings
      </NavLink>
    </nav>
  );
}

