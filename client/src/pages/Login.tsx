import { motion } from "framer-motion";

import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">

      <div className="hidden lg:grid p-10">
        <div className="glass rounded-3xl p-10">

          <h1 className="text-5xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-4 opacity-70">
            Modern Login Experience
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl">
              Analytics
            </div>

            <div className="glass p-6 rounded-2xl">
              Security
            </div>

            <div className="glass p-6 rounded-2xl">
              Cloud
            </div>

            <div className="glass p-6 rounded-2xl">
              AI
            </div>
          </div>

        </div>
      </div>

      <div className="flex items-center justify-center p-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="glass w-full max-w-md rounded-3xl p-8"
        >
          <h2 className="mb-6 text-3xl font-bold">
            Sign In
          </h2>

          <LoginForm />
        </motion.div>
      </div>
    </div>
  );
}