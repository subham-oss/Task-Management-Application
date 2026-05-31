import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import ForgotPasswordForm from "../components/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Bento Side */}

      <div className="hidden lg:flex items-center justify-center p-10">
        <div className="glass rounded-3xl p-10 w-full max-w-xl">
          <h1 className="text-5xl font-bold">
            Reset Password
          </h1>

          <p className="mt-4 opacity-70">
            Recover access to your account
            securely.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="glass p-6 rounded-2xl cursor-pointer
transition-all
duration-300
hover:-translate-y-2
hover:scale-105
hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]
hover:border-indigo-400/50">
              Security
            </div>

            <div className="glass p-6 rounded-2xl cursor-pointer
transition-all
duration-300
hover:-translate-y-2
hover:scale-105
hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]
hover:border-indigo-400/50">
              Recovery
            </div>

            <div className="glass p-6 rounded-2xl cursor-pointer
transition-all
duration-300
hover:-translate-y-2
hover:scale-105
hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]
hover:border-indigo-400/50">
              Privacy
            </div>

            <div className="glass p-6 rounded-2xl cursor-pointer
transition-all
duration-300
hover:-translate-y-2
hover:scale-105
hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]
hover:border-indigo-400/50">
              Support
            </div>
          </div>
        </div>
      </div>

      {/* Form */}

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
          transition={{
            duration: 0.4,
          }}
          className="glass w-full max-w-md rounded-3xl p-8"
        >
          <h2 className="text-3xl font-bold mb-2">
            Forgot Password?
          </h2>

          <p className="opacity-70 mb-6">
            Enter your email address and
            we'll send you a reset link.
          </p>

          <ForgotPasswordForm />

          <div className="text-center mt-6">
            <Link
              to="/login"
              className="text-indigo-400 hover:text-indigo-300"
            >
              ← Back to Login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}