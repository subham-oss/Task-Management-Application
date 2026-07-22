import { useState } from "react";
import { NavLink, useNavigate, useParams,Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import { clsx } from "clsx";
import {
  LayoutDashboard,
  CheckSquare,
  PlusCircle,
  Users,
  LogOut,
  Menu,
  ChevronLeft,
  User,
} from "lucide-react";

// Explicit Framer Motion 12 Variant Typing for smooth structural transitions
const sidebarVariants: Variants = {
  expanded: { width: 280 },
  collapsed: { width: 80 },
};

export default function Sidebar() {
  const { dark, toggleTheme } = useTheme();
  const { id = "default-user" } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  // Mock User Session Data (Swap with your global Auth state/context later)
  const user = {
    username: "Alex Mercer",
    email: "alex.m@taskflow.com",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
  };

  // Explicit path mapping synchronized with your React Router configuration
  const menuItems = [
    {
      name: "Dashboard",
      path: `/dashboard/${id}`,
      exact: true,
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Manage Task",
      path: `/dashboard/${id}/tasks`,
      exact: false,
      icon: <CheckSquare size={20} />,
    },
    {
      name: "Create Task",
      path: `/dashboard/${id}/create`,
      exact: false,
      icon: <PlusCircle size={20} />,
    },
    {
      name: "Team Members",
      path: `/dashboard/${id}/team`,
      exact: false,
      icon: <Users size={20} />,
    },
  ];

  const handleLogout = () => {
    // Perform authentication cleanup here (e.g., deleting cookies, clearing local tokens)
    console.log("Terminating workspace engine session.");
    navigate("/login");
  };

  return (
    <motion.aside
      variants={sidebarVariants}
      animate={isExpanded ? "expanded" : "collapsed"}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="h-screen sticky top-0 left-0 bg-white/5 dark:bg-black/20 border-r border-black/10 dark:border-white/10 backdrop-blur-xl flex flex-col justify-between z-40 select-none overflow-hidden shrink-0"
    >
      <div>
        {/* Workspace Branding Header & Sidebar Control Toggle Button */}
        <div
          className={`p-4 flex ${isExpanded ? "flex-row" : "flex-col gap-2"} items-center justify-between border-b border-black/5 dark:border-white/5 h-20`}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-2xl font-bold"
              >
                TaskFlow
              </motion.span>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs mx-auto shrink-0"
              >
                TF
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-100"
            title={
              isExpanded ? "Collapse Navigation Menu" : "Expand Navigation Menu"
            }
          >
            {isExpanded ? <ChevronLeft size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* User Workspace Profile Component Metadata Info */}
        <div className="p-4 border-b border-black/5 dark:border-white/5">
          <div
            className={clsx(
              "flex items-center gap-3",
              !isExpanded && "justify-center",
            )}
          >
            {/* CLICKABLE AVATAR LINK */}
            <Link
              to={`/dashboard/${id}/avatar`}
              title="Click to update avatar"
              className="shrink-0 rounded-xl overflow-hidden group relative block"
            >
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-11 h-11 rounded-xl object-cover ring-2 ring-blue-500/30 border border-white/20 transition-transform group-hover:scale-105"
                />
              ) : (
                <div className="w-11 h-11 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                  <User size={20} />
                </div>
              )}
            </Link>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <h4 className="text-sm font-semibold truncate max-w-[150px]">
                    {user.username}
                  </h4>
                  <p className="text-xs opacity-60 truncate max-w-[150px] font-medium mt-0.5">
                    {user.email}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Core Navigation Pipeline using React Router Dom NavLinks */}
        <nav className="p-3 space-y-1.5 mt-4">
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              end={item.exact}
              className={({ isActive }) =>
                clsx(
                  "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all group relative",
                  !isExpanded && "justify-center",
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/15"
                    : "opacity-70",
                )
              }
            >
              <div className="shrink-0">{item.icon}</div>

              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="whitespace-nowrap"
                >
                  {item.name}
                </motion.span>
              )}

              {/* Tooltip Overlay displayed strictly on Compact/Collapsed Icon Hover States */}
              {!isExpanded && (
                <div className="absolute left-16 hidden group-hover:block bg-neutral-900 dark:bg-neutral-800 text-white text-xs px-2.5 py-1.5 rounded-md font-normal whitespace-nowrap shadow-md pointer-events-none z-50">
                  {item.name}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer Navigation Termination Utilities block */}
      <div className="p-3 border-t border-black/5 dark:border-white/5 space-y-3">
        <div
          className={clsx(
            "flex items-center px-3 h-11",
            isExpanded ? "justify-between" : "justify-center",
          )}
        >
          {isExpanded && (
            <span className="text-xs font-medium opacity-70 uppercase tracking-wider">
              {dark ? "Dark Mode" : "Light Mode"}
            </span>
          )}
          <ThemeToggle dark={dark} toggle={toggleTheme} />
        </div>
        <button
          onClick={handleLogout}
          className={clsx(
            "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-all cursor-pointer group relative",
            !isExpanded && "justify-center",
          )}
        >
          <div className="shrink-0">
            <LogOut size={20} />
          </div>

          {isExpanded && (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Logout
            </motion.span>
          )}

          {!isExpanded && (
            <div className="absolute left-16 hidden group-hover:block bg-red-600 text-white text-xs px-2.5 py-1.5 rounded-md font-normal whitespace-nowrap shadow-md pointer-events-none z-50">
              Logout
            </div>
          )}
        </button>
      </div>
    </motion.aside>
  );
}
