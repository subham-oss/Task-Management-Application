import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Eye,
  EyeOff,
  Mail,
  User,
} from "lucide-react";

import {
  FaGithub,
  FaGoogle,
} from "react-icons/fa";

import {
  registerSchema,
  type RegisterSchema,
} from "../lib/schema";

export default function RegisterForm() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver:
      zodResolver(registerSchema),
  });

  const onSubmit = async (
    data: RegisterSchema
  ) => {
    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    console.log(data);

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Name */}

      <div>
        <label>Full Name</label>

        <div className="relative mt-2">
          <User
            size={18}
            className="absolute left-3 top-3"
          />

          <input
            {...register("name")}
            placeholder="John Doe"
            className="w-full rounded-xl bg-white/10 p-3 pl-10 outline-none"
          />
        </div>

        <p className="text-red-400 text-sm">
          {errors.name?.message}
        </p>
      </div>

      {/* Email */}

      <div>
        <label>Email</label>

        <div className="relative mt-2">
          <Mail
            size={18}
            className="absolute left-3 top-3"
          />

          <input
            {...register("email")}
            placeholder="john@example.com"
            className="w-full rounded-xl bg-white/10 p-3 pl-10 outline-none"
          />
        </div>

        <p className="text-red-400 text-sm">
          {errors.email?.message}
        </p>
      </div>

      {/* Password */}

      <div>
        <label>Password</label>

        <div className="relative mt-2">
          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            {...register("password")}
            className="w-full rounded-xl bg-white/10 p-3 outline-none"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="absolute right-3 top-3"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        <p className="text-red-400 text-sm">
          {errors.password?.message}
        </p>
      </div>

      {/* Confirm Password */}

      <div>
        <label>
          Confirm Password
        </label>

        <div className="relative mt-2">
          <input
            type={
              showConfirm
                ? "text"
                : "password"
            }
            {...register(
              "confirmPassword"
            )}
            className="w-full rounded-xl bg-white/10 p-3 outline-none"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirm(
                !showConfirm
              )
            }
            className="absolute right-3 top-3"
          >
            {showConfirm ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        <p className="text-red-400 text-sm">
          {
            errors.confirmPassword
              ?.message
          }
        </p>
      </div>

      {/* Terms */}

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          {...register("terms")}
        />

        I accept Terms &
        Conditions
      </label>

      <p className="text-red-400 text-sm">
        {errors.terms?.message}
      </p>

      {/* Button */}

      <button
        disabled={loading}
        className="w-full rounded-xl bg-indigo-600 p-3 font-semibold transition hover:bg-indigo-500"
      >
        {loading
          ? "Creating Account..."
          : "Create Account"}
      </button>

      {/* Divider */}

      <div className="relative">
        <div className="border-t border-white/20" />

        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent px-2 text-sm">
          OR
        </span>
      </div>

      {/* Social */}

      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-xl border border-white/20 p-3 flex items-center justify-center gap-2"
        >
          <FaGoogle />
          Google
        </button>

        <button
          type="button"
          className="flex-1 rounded-xl border border-white/20 p-3 flex items-center justify-center gap-2"
        >
          <FaGithub />
          GitHub
        </button>
      </div>
    </form>
  );
}