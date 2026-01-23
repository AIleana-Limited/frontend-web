"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  resetPasswordSchema,
  type ResetPasswordSchema,
} from "@/schemas/reset-password";
import { LuBolt } from "react-icons/lu";

export default function ResetPasswordForm() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isSubmitting, isValid},
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { email: "" },
    mode: "onTouched",
  });

  const onSubmit = async (values: ResetPasswordSchema) => {
    console.log(values);
    // ✅ TODO: call backend to send reset link
  };

const email = watch("email");
const disabled = !email?.trim() || !isValid || isSubmitting;

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/80">
          <div className="h-8 w-8 rounded-lg bg-white/10 flex justify-center items-center"><LuBolt /></div>
          <span className="font-medium">Alleana</span>
        </div>

        <button className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
          Sign In
        </button>
      </div>

      {/* Title */}
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Reset Password</h1>
      <p className="mt-2 text-sm text-white/50">
        Enter your email, and we&apos;ll send you a recovery link.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => {
            const error = fieldState.error?.message;

            return (
              <div className="space-y-2">
                <label className="text-sm text-white/70">Email Address</label>

                <input
                  {...field}
                  type="email"
                  placeholder="Enter your email address"
                  className={`h-11 w-full rounded-xl border bg-white/5 px-4 text-sm text-white outline-none transition
                  placeholder:text-white/30
                  ${
                    error
                      ? "border-red-500/40 focus:border-red-500/70"
                      : "border-white/10 focus:border-white/20"
                  }`}
                />

                {error ? (
                  <p className="text-xs text-red-400">{error}</p>
                ) : null}
              </div>
            );
          }}
        />

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <button
            type="button"
            className="h-12 rounded-xl border border-blue-500/40 bg-transparent text-sm font-medium text-white/80
            transition hover:border-blue-500/70 hover:bg-white/5"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={disabled}
            className="h-12 rounded-xl bg-blue-900/80 text-sm font-medium text-white/80 transition
            hover:bg-blue-900 disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Link"}
          </button>
        </div>
      </form>
    </div>
  );
}
