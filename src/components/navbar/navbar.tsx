import "./navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({
  darkMode,
  setMode,
}: {
  darkMode: boolean;
  setMode: any;
}) {
  return (
    <nav className="navbar shadow-lg sticky bg-gradient-to-r from-base-100 to-base-200 m-0">
      <Link to="/">
        <button
          aria-label="home"
          className="default hover:text-primary active material-symbols-rounded"
        >
          rocket
        </button>
      </Link>
      <button
        aria-label="color-theme"
        className="default material-symbols-rounded hover:text-primary active material-symbols-rounded ml-5"
        onClick={() => {
          setMode(!darkMode);
          console.log;
          document
            .querySelector("html")
            ?.setAttribute("data-theme", !darkMode ? "cupcake" : "dracula");
        }}
      >
        {darkMode ? "dark_mode" : "light_mode"}
      </button>
    </nav>
  );
}
