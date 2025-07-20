import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link className={location.pathname === "/" ? "active" : ""} to="/">
        Home
      </Link>
      <Link className={location.pathname === "/about" ? "active" : ""} to="/about">
        About
      </Link>
      <Link
        className={location.pathname === "/projects" ? "active" : ""}
        to="/projects"
      >
        Projects
      </Link>
      <Link
        className={location.pathname === "/contact" ? "active" : ""}
        to="/contact"
      >
        Contact
      </Link>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="theme-toggle"
        aria-label="Toggle dark/light mode"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
