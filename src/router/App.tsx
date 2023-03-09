import { Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar/navbar";
import { useState } from "react";
// styles
import "./App.scss";

// pages
import Home from "../pages/Home/home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Adopt from "../pages/Adopt/adopt";

function App() {
  const [darkMode, setMode] = useState<boolean>(false);
  return (
    <div className="App">
      <NavBar darkMode={darkMode} setMode={setMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/profile" element={<p>Profile</p>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
