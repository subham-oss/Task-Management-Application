import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Mail,
  ArrowUpRight,
  CheckSquare
} from "lucide-react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-white/70 backdrop-blur-xl dark:bg-zinc-950/70">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
              <CheckSquare size={24} />
              <span className="font-bold text-xl ">TaskFlow</span>
            </Link>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Manage tasks, collaborate with teams, and boost productivity
              through one powerful platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {[
                "Home",
                "Dashboard",
                "Projects",
                "Tasks",
                "Pricing",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-zinc-600 transition hover:text-indigo-500 dark:text-zinc-400"
                  >
                    {item}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
              Resources
            </h3>

            <ul className="space-y-3">
              {[
                "Documentation",
                "Help Center",
                "Privacy Policy",
                "Terms & Conditions",
                "Support",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-zinc-600 transition hover:text-indigo-500 dark:text-zinc-400"
                  >
                    {item}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
              Contact
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:support@taskflow.com"
                className="flex items-center gap-3 text-zinc-600 hover:text-indigo-500 dark:text-zinc-400"
              >
                <Mail size={18} />
                support@taskflow.com
              </a>

              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="rounded-xl border border-zinc-200 p-3 transition hover:scale-110 hover:border-indigo-500 dark:border-zinc-700"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="#"
                  className="rounded-xl border border-zinc-200 p-3 transition hover:scale-110 hover:border-indigo-500 dark:border-zinc-700"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="#"
                  className="rounded-xl border border-zinc-200 p-3 transition hover:scale-110 hover:border-indigo-500 dark:border-zinc-700"
                >
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 border-t border-zinc-200 pt-6 dark:border-zinc-800"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} TaskFlow. All Rights Reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-zinc-600 hover:text-indigo-500 dark:text-zinc-400"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-sm text-zinc-600 hover:text-indigo-500 dark:text-zinc-400"
              >
                Terms
              </a>

              <a
                href="#"
                className="text-sm text-zinc-600 hover:text-indigo-500 dark:text-zinc-400"
              >
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;