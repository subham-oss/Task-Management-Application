import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronUp, CheckSquare } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-white/70 backdrop-blur-xl dark:bg-zinc-950/70">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left Column */}
          <div>
            <Link to="/" className="flex items-center text-white gap-2 mb-4">
              <CheckSquare size={24} />
              <span className="text-xl text-white font-bold">TaskFlow</span>
            </Link>

            <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
              Manage tasks, collaborate with teams, and boost productivity
              through one powerful platform.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="mb-4 text-lg text-white font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-zinc-600 hover:text-indigo-500 dark:text-zinc-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-zinc-600 hover:text-indigo-500 dark:text-zinc-400"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-zinc-600 hover:text-indigo-500 dark:text-zinc-400"
              >
                Contact
              </Link>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 rounded-xl border text-white border-zinc-200 px-4 py-2 transition hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-700"
            >
              <ChevronUp size={18} />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800"
        >
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} TaskFlow. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;