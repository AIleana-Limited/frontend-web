import { z } from "zod";

export const otpSchema = z.object({
  otp: z
    .string()
    .length(6, "Enter the 6-digit code")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

export type OtpSchema = z.infer<typeof otpSchema>;
