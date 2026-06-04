import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Menu, X, Search, Bell, Plus, CheckSquare, User, } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import ThemeToggle from "./ThemeToggle";

type NavbarProps = {
  dark: boolean;
  toggleTheme: () => void;
};

const navItems = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Tasks",
    path: "/tasks",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Calendar",
    path: "/calendar",
  },
  {
    name: "Analytics",
    path: "/analytics",
  },
];

export default function Navbar({ dark, toggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="mx-4 mt-4 glass rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <CheckSquare size={24} />
              <span className="font-bold text-xl ">TaskFlow</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "font-semibold text-blue-500"
                        : "opacity-80 hover:opacity-100"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                />

                <input
                  placeholder="Search..."
                  className="glass rounded-xl pl-10 pr-4 py-2 outline-none"
                />
              </div>

              {/* Create */}
              <button className="glass px-4 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition">
                <Plus size={16} />
                Create
              </button>

              {/* Notifications */}
              <button className="glass p-3 rounded-xl">
                <Bell size={18} />
              </button>

              {/* Theme */}
              <ThemeToggle dark={dark} toggle={toggleTheme} />

              {/* Profile */}
              <button className="glass p-3 rounded-xl">
                <User size={18} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: 300,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 300,
            }}
            className="fixed top-0 right-0 h-screen w-72 glass z-50 p-6"
          >
             <div className="flex items-center justify-between mb-8">
        <h2 className="font-bold text-lg">
          Menu
        </h2>

        <button
          onClick={() => setMobileOpen(false)}
          className="glass p-2 rounded-lg"
        >
          <X size={20} />
        </button>
      </div>
            <div className="flex flex-col gap-6 mt-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}

              <button className="glass p-3 rounded-xl flex items-center gap-2">
                <Plus size={18} />
                Create Task
              </button>

              <button className="glass p-3 rounded-xl flex items-center gap-2">
                <Bell size={18} />
                Notifications
              </button>

              <ThemeToggle dark={dark} toggle={toggleTheme} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
