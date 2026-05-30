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

export type LoginSchema = z.infer<
  typeof loginSchema
>;