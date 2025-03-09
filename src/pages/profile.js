import NavBar from "../components/navBar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SettingsContent() {
  return (
    <>
      <p>To implement Settings Page</p>
    </>
  );
}

function ProfileContent() {
  return (
    <>
      <p>To implement Profile Page</p>
    </>
  );
}

export default function Profile() {
  const location = useLocation();
  let Content = "";

  if (location.pathname === "/bookworm/profile") {
    Content = <ProfileContent />;
  } else if (location.pathname === "bookworm/profile/settings") {
    Content = <SettingsContent />;
  }

  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          {Content}
          <Outlet />
        </div>
      </div>
    </>
  );
}
