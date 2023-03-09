import "./navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [darkMode, setMode] = useState<boolean>(false);
  return (
    <nav className="navbar bg-gradient-to-r from-base-100 to-base-200 m-0">
      <Link to="/">
        <img src="/images/icon.png" />
      </Link>
      <a
        className="material-symbols-rounded hover:text-primary cursor-pointer"
        onClick={() => console.log(setMode(!darkMode))}
      >
        {darkMode ? "dark_mode" : "light_mode"}
      </a>
    </nav>
  );
}
