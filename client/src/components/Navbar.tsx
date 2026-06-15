import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `
      transition-all duration-300 hover:text-blue-500
      ${isActive ? "text-blue-500 font-semibold" : ""}
    `;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav
        className="
          max-w-7xl mx-auto
          glass
          rounded-2xl
          px-6 py-4
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          TaskFlow
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={navLinkClass}
          >
            Contact
          </NavLink>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="
              px-5 py-2 rounded-xl
              bg-blue-600 text-white
              hover:bg-blue-700
              transition
            "
          >
            Login
          </Link>

          <ThemeToggle
            dark={dark}
            toggle={toggleTheme}
          />
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle
            dark={dark}
            toggle={toggleTheme}
          />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg glass"
          >
            {isOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden
            mt-3
            glass
            rounded-2xl
            max-w-7xl mx-auto
            p-6
          "
        >
          <div className="flex flex-col gap-5">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="
                px-5 py-3 rounded-xl
                bg-blue-600 text-white
                hover:bg-blue-700
                transition text-center
              "
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}