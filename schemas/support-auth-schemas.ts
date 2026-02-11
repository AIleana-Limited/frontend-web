import { z } from "zod";

export const supportSignInSchema = z
  .object({
    email: z.email("Enter a valid email address"),
    password: z.string().min(6, "Enter a valid password"),
  });

export type SupportSignInSchema = z.infer<typeof supportSignInSchema>;
