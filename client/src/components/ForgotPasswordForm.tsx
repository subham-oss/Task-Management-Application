import { Mail } from "lucide-react";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  forgotPasswordSchema,
  type ForgotPasswordSchema,
} from "../lib/schema";

export default function ForgotPasswordForm() {
  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(
      forgotPasswordSchema
    ),
  });

  const onSubmit = async (
    data: ForgotPasswordSchema
  ) => {
    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    console.log(data);

    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-3">
          Check your inbox
        </h3>

        <p className="text-white/70">
          We've sent a password reset
          link to your email address.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <label>Email Address</label>

        <div className="relative mt-2">
          <Mail
            size={18}
            className="absolute left-3 top-3"
          />

          <input
            {...register("email")}
            placeholder="john@example.com"
            className="w-full rounded-xl bg-white/10 p-3 pl-10 outline-none border border-white/10 focus:border-indigo-400"
          />
        </div>

        <p className="text-red-400 text-sm mt-1">
          {errors.email?.message}
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-indigo-600 p-3 font-semibold transition hover:bg-indigo-500 disabled:opacity-70"
      >
        {loading
          ? "Sending Link..."
          : "Send Reset Link"}
      </button>
    </form>
  );
}