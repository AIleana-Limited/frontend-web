import { z } from "zod";

export const resetPasswordSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
