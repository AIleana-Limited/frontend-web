import { z } from "zod";

const hasLowercase = (v: string) => /[a-z]/.test(v);
const hasSpecial = (v: string) => /[^A-Za-z0-9]/.test(v);

export const newPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .refine(hasLowercase, "Password must include a lowercase letter")
      .refine(hasSpecial, "Password must include a special character"),
    confirmPassword: z.string().min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type NewPasswordSchema = z.infer<typeof newPasswordSchema>;
