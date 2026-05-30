import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Enter valid email"),

  password: z
    .string()
    .min(8, "Minimum 8 characters"),

  remember: z.boolean(),
});


export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters"),

    email: z
      .string()
      .email("Enter a valid email"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),

    terms: z.boolean().refine((v) => v === true, {
      message: "You must accept terms",
    }),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );
export type LoginSchema = z.infer<
  typeof loginSchema
>;

export type RegisterSchema = z.infer<
  typeof registerSchema
>;