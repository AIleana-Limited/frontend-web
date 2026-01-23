"use client";

import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, CheckCircle2, XCircle } from "lucide-react";

import {
  newPasswordSchema,
  type NewPasswordSchema,
} from "@/schemas/new-password-schema";
import { LuBolt } from "react-icons/lu";

export default function ResetNewPasswordForm() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { isSubmitting, isValid },
  } = useForm<NewPasswordSchema>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const password = watch("password");

  // ✅ Requirements (for UI feedback)
  const checks = useMemo(() => {
    const minLen = password.length >= 8;
    const lowercase = /[a-z]/.test(password);
    const special = /[^A-Za-z0-9]/.test(password);

    const score = [minLen, lowercase, special].filter(Boolean).length;

    const strengthLabel =
      score === 0 ? "Weak" : score === 1 ? "Fair" : score === 2 ? "Good" : "Strong";

    const strengthWidth = score === 0 ? 0 : score === 1 ? 33 : score === 2 ? 66 : 100;

    return {
      minLen,
      lowercase,
      special,
      score,
      strengthLabel,
      strengthWidth,
    };
  }, [password]);

  const canSave = isValid && !isSubmitting;

  const onSubmit = async (values: NewPasswordSchema) => {
    console.log(values);
    // ✅ TODO: send to backend
  };

  const Requirement = ({
    ok,
    text,
  }: {
    ok: boolean;
    text: string;
  }) => (
    <div className={`flex items-center gap-2 text-sm ${ok ? "text-emerald-500" : "text-red-500"}`}>
      {ok ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
      <span>{text}</span>
    </div>
  );

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-(--text-primary)/80">
          <div className="h-9 w-9 rounded-xl bg-white/10 flex justify-center items-center"><LuBolt /></div>
          <span className="text-lg font-medium">Alleana</span>
        </div>

        <button className="text-sm text-(--text-primary)/70 underline underline-offset-4 hover:text-(--text-primary)">
          Sign Up
        </button>
      </div>

      {/* Title */}
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-(--text-primary)">
        Reset Password
      </h1>

      <p className="mt-3 text-sm leading-relaxed text-(--text-primary)/55">
        Let&apos;s keep your account secure. Please choose a strong, unique password that you
        haven&apos;t used here before.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        {/* Password */}
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => {
            const error = fieldState.error?.message;

            return (
              <div className="space-y-2">
                <label className="text-sm text-(--text-primary)/70">Password</label>

                <div
                  className={`flex h-12 items-center gap-2 rounded-xl border bg-white/5 px-4 transition
                  ${
                    error
                      ? "border-red-500/70"
                      : "border-white/10 focus-within:border-blue-500/60"
                  }`}
                >
                  <input
                    {...field}
                    type={showPass ? "text" : "password"}
                    placeholder="Enter password"
                    className="h-full w-full bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-primary)/30"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPass((p) => !p)}
                    className="text-(--text-primary)/40 hover:text-(--text-primary)/70"
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* strength bar */}
                <div className="mt-3">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-xs text-(--text-primary)/45">
                      Password strength
                    </span>

                    <div className="h-2 w-28 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-emerald-500 transition-all"
                        style={{ width: `${checks.strengthWidth}%` }}
                      />
                    </div>

                    <span className="text-xs text-(--text-primary)/60">
                      {checks.strengthLabel}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Requirement ok={checks.special} text="1 Special character" />
                    <Requirement ok={checks.lowercase} text="1 Lowercase Letter" />
                    <Requirement ok={checks.minLen} text="Minimum of 8 characters" />
                  </div>
                </div>
              </div>
            );
          }}
        />

        {/* Confirm password */}
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field, fieldState }) => {
            const error = fieldState.error?.message;

            return (
              <div className="space-y-2">
                <label className="text-sm text-(--text-primary)/70">
                  Confirm Password
                </label>

                <div
                  className={`flex h-12 items-center gap-2 rounded-xl border bg-white/5 px-4 transition
                  ${
                    error
                      ? "border-red-500/50"
                      : "border-white/10 focus-within:border-blue-500/60"
                  }`}
                >
                  <input
                    {...field}
                    type={showConfirm ? "text" : "password"}
                    placeholder="Re-enter password"
                    className="h-full w-full bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-primary)/30"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm((p) => !p)}
                    className="text-(--text-primary)/40 hover:text-(--text-primary)/70"
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {error ? <p className="text-xs text-red-400">{error}</p> : null}
              </div>
            );
          }}
        />

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <button
            type="button"
            className="h-12 rounded-xl border border-blue-500/40 bg-transparent text-sm font-medium
            text-(--text-primary)/80 transition hover:border-blue-500/70 hover:bg-white/5"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!canSave}
            className={`h-12 rounded-xl bg-blue-900/80 text-sm font-medium text-(--text-primary)/80 transition
            ${canSave ? "hover:bg-blue-900" : "cursor-not-allowed opacity-40"}`}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
