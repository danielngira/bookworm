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
  let content = "";

  if (location.pathname === "/bookworm/profile") {
    content = <ProfileContent />;
  } else if (location.pathname === "bookworm/profile/settings") {
    content = <SettingsContent />;
  }

  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <p> {content} </p>
          <Outlet />
        </div>
      </div>
    </>
  );
}
