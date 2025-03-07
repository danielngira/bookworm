import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Profile from "./pages/profile";
import Home from "./pages/home";
import MyBooks from "./pages/mybooks";
import Settings from "./pages/settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookworm/mybooks" element={<MyBooks />} />
      <Route path="/bookworm/profile" element={<Profile />}>
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
