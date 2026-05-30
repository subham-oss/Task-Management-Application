import { motion } from "framer-motion";

import RegisterForm from "../components/RegisterForm";

import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Bento Side */}

      <div className="hidden lg:flex items-center justify-center p-10">
        <div className="glass rounded-3xl p-10 w-full max-w-xl">
          <h1 className="text-5xl font-bold">Join Us Today</h1>

          <p className="mt-4 opacity-70">
            Sign up to access your account and start managing your tasks.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div
              className="glass p-6 rounded-2xl cursor-pointer
transition-all
duration-300
hover:-translate-y-2
hover:scale-105
hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]
hover:border-indigo-400/50"
            >
              AI Insights
            </div>

            <div
              className="glass p-6 rounded-2xl cursor-pointer
transition-all
duration-300
hover:-translate-y-2
hover:scale-105
hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]
hover:border-indigo-400/50"
            >
              Productivity Score
            </div>

            <div
              className="glass p-6 rounded-2xl cursor-pointer
transition-all
duration-300
hover:-translate-y-2
hover:scale-105
hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]
hover:border-indigo-400/50"
            >
              Team Management
            </div>

            <div
              className="glass p-6 rounded-2xl cursor-pointer
transition-all
duration-300
hover:-translate-y-2
hover:scale-105
hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]
hover:border-indigo-400/50"
            >
              Task Tracking
            </div>
          </div>
        </div>
      </div>

      {/* Register Card */}

      <div className="flex items-center justify-center p-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="glass w-full max-w-lg rounded-3xl p-8"
        >
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>

          <p className="opacity-70 mb-6">Sign up to continue</p>

          <RegisterForm />

          <div className="mt-6 text-center">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 text-indigo-400 hover:text-indigo-300"
            >
              Login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
