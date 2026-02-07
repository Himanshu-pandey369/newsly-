import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 w-full">
      <div className="list-none" style={{ backgroundColor: "#061E29" }}>
        <div className="flex justify-between items-center">
          <div>
            <li>
              <img src="./public/newsly-logo.svg" alt="logo" />
            </li>
          </div>
          <ul className="hidden md:flex gap-12 h-12 p-3">
            <NavLink
              className={(e) => {
                return e.isActive ? "text-cyan-300 rounded-full" : "text-white";
              }}
              to="/"
            >
              <li className="text-l ">General</li>
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "text-cyan-300 rounded-full" : "text-white";
              }}
              to="/entertainment"
            >
              <li className="text-l ">Entertainment</li>
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "text-cyan-300 rounded-full" : "text-white";
              }}
              to="/business"
            >
              <li className="text-l ">Business</li>
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "text-cyan-300 rounded-full" : "text-white";
              }}
              to="/health"
            >
              <li className="text-l ">Health</li>
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "text-cyan-300 rounded-full" : "text-white";
              }}
              to="/science"
            >
              <li className="text-l ">Science</li>
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "text-cyan-300 rounded-full" : "text-white";
              }}
              to="/sports"
            >
              <li className="text-l ">Sports</li>
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "text-cyan-300 rounded-full" : "text-white";
              }}
              to="/technology"
            >
              <li className="text-l ">Technology</li>
            </NavLink>

            <button
              className="text-amber-50 flex items-center justify-center w-8 h-8"
              onClick={toggleTheme}
            >
              {!isDark ? (
                <img
                  src="dark.png"
                  className="w-full h-full object-contain filter invert"
                ></img>
              ) : (
                <img
                  src="light.jpeg"
                  className="w-full h-full object-contain filter invert"
                  style={{ mixBlendMode: "screen" }}
                ></img>
              )}
            </button>
          </ul>
          <button className="md:hidden px-5 text-amber-50" onClick={hamburger}>
            |||
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="list-none" style={{ backgroundColor: "#061E29" }}>
          <div className="flex flex-col">
            <ul className="md:hidden gap-15 p-3">
              <NavLink
                className={(e) => {
                  return e.isActive
                    ? "text-cyan-300 rounded-full"
                    : "text-white";
                }}
                to="/"
              >
                <li className="text-l ">General</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive
                    ? "text-cyan-300 rounded-full"
                    : "text-white";
                }}
                to="/entertainment"
              >
                <li className="text-l ">Entertainment</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive
                    ? "text-cyan-300 rounded-full"
                    : "text-white";
                }}
                to="/business"
              >
                <li className="text-l ">Business</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive
                    ? "text-cyan-300 rounded-full"
                    : "text-white";
                }}
                to="/health"
              >
                <li className="text-l ">Health</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive
                    ? "text-cyan-300 rounded-full"
                    : "text-white";
                }}
                to="/science"
              >
                <li className="text-l ">Science</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive
                    ? "text-cyan-300 rounded-full"
                    : "text-white";
                }}
                to="/sports"
              >
                <li className="text-l ">Sports</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive
                    ? "text-cyan-300 rounded-full"
                    : "text-white";
                }}
                to="/technology"
              >
                <li className="text-l ">Technology</li>
              </NavLink>
              <button
                className="text-white flex items-end justify-center w-8 h-8"
                onClick={toggleTheme}
              >
                {!isDark ? (
                  <img
                    className="w-full h-full object-contain filter invert"
                    src="dark.png"
                  ></img>
                ) : (
                  <img
                    src="light.jpeg"
                    className="w-full h-full object-contain filter invert"
                    style={{ mixBlendMode: "screen" }}
                  ></img>
                )}
              </button>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
