"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import OtpInput from "@/features/auth/otp/OtpInput";
import { otpSchema, type OtpSchema } from "@/schemas/otp-schemas";
import { LuBolt } from "react-icons/lu";

type Props = {
  email?: string;
};

export default function VerifyEmailForm({ email = "abdulakeem***@mail.com" }: Props) {
  const [timeLeft, setTimeLeft] = useState(30);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm<OtpSchema>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
    mode: "onSubmit",
  });

  const otp = watch("otp");
  const canResend = timeLeft <= 0;
  const canContinue = otp?.length === 6;

  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft]);

  const countdown = useMemo(() => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }, [timeLeft]);

  const onSubmit = async (values: OtpSchema) => {
    console.log("OTP:", values.otp);
    // ✅ call your verify API here
  };

  const onResend = async () => {
    if (!canResend) return;

    console.log("Resend code");
    // ✅ call resend API here

    reset({ otp: "" });
    setTimeLeft(30);
  };

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/80">
          <div className="h-8 w-8 rounded-lg bg-white/10 flex 
          justify-center items-center" ><LuBolt /></div>
          <span className="font-medium">Alleana</span>
        </div>

        <button className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
          Sign In
        </button>
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Check your mail</h1>

      <p className="mt-2 text-sm leading-relaxed text-white/50">
        We’ve sent a verification link to your email address{" "}
        <span className="text-white/80">{email}</span>. Please check your inbox and click
        the link to verify your account.
      </p>

      {/* OTP */}
      <div className="mt-8">
        <OtpInput control={control} name="otp" length={6} />
      </div>

      {/* Timer */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
        <span>This code will expire in:</span>
        <span className="rounded-lg border border-white/10 bg-black/40 px-3 py-1 text-white/90">
          {countdown}
        </span>
      </div>

      {/* Resend */}
      <div className="mt-6 text-center text-sm text-white/50">
        Didn’t receive the code?{" "}
        <button
          type="button"
          onClick={onResend}
          disabled={!canResend}
          className={`font-medium transition ${
            canResend ? "text-blue-400 hover:underline" : "cursor-not-allowed text-white/30"
          }`}
        >
          Resend Code
        </button>
      </div>

      {/* Buttons */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <button
          type="button"
          className="h-12 rounded-xl border border-blue-500/40 bg-transparent text-sm font-medium text-white/80
          transition hover:border-blue-500/70 hover:bg-white/5"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit(onSubmit)}
          disabled={!canContinue || isSubmitting}
          className="h-12 rounded-xl bg-blue-900/80 text-sm font-medium text-white/80 transition
          hover:bg-blue-900 disabled:opacity-40"
        >
          {isSubmitting ? "Verifying..." : "Continue"}
        </button>
      </div>
    </div>
  );
}
