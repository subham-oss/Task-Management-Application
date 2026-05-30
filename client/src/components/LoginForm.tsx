import { Eye, EyeOff, Mail } from "lucide-react";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginSchema } from "../lib/schema";

import { FaGithub, FaGoogle } from "react-icons/fa6";

export default function LoginForm() {
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

        <a href="#" className="text-blue-400">
          Forgot Password?
        </a>
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
  );
}
