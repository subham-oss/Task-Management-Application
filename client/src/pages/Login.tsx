import { motion } from "framer-motion";
import { Eye, EyeOff, Mail } from "lucide-react";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginSchema } from "../lib/schema";

import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Login() {
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      remember: false,
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    setLoading(true);

    await new Promise((r) => setTimeout(r, 2000));

    console.log(data);

    setLoading(false);
  };
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden lg:grid p-10">
        <div className="glass rounded-3xl p-10">
          <h1 className="text-5xl font-bold">Welcome Back</h1>

          <p className="mt-4 opacity-70">Sign in to access your account</p>

          <div className="mt-10 grid grid-cols-2 gap-4">
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
              Team
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
              Tasks
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
          <h2 className="mb-6 text-3xl font-bold">Sign In</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label>Email</label>

              <div className="relative mt-2">
                <Mail size={18} className="absolute left-3 top-3" />

                <input
                  {...register("email")}
                  placeholder="john@example.com"
                  className="w-full rounded-xl bg-white/10 p-3 pl-10 outline-none"
                />
              </div>

              <p className="text-red-400 text-sm">{errors.email?.message}</p>
            </div>

            <div>
              <label>Password</label>

              <div className="relative mt-2">
                <input
                  type={show ? "text" : "password"}
                  {...register("password")}
                  placeholder="********"
                  className="w-full rounded-xl bg-white/10 p-3 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-3"
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <p className="text-red-400 text-sm">{errors.password?.message}</p>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex gap-2">
                <input type="checkbox" {...register("remember")} />
                Remember Me
              </label>

              <Link to="/forgot-password" className="text-blue-400">
                Forgot Password?
              </Link>
            </div>

            <button
              disabled={loading}
              className="w-full rounded-xl bg-indigo-600 p-3 font-semibold"
            >
              {loading ? "Signing In..." : "Login"}
            </button>

            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 rounded-xl border p-3 flex items-center justify-center gap-2"
              >
                <FaGoogle size={18} />
                Google
              </button>

              <button
                type="button"
                className="flex-1 rounded-xl border p-3 flex items-center justify-center gap-2"
              >
                <FaGithub size={18} />
                GitHub
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            Don't have an account?
            <Link
              to="/register"
              className="ml-2 text-indigo-400 hover:text-indigo-300"
            >
              Create Account
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
