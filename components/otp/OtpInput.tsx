"use client";

import { useMemo, useRef } from "react";
import { Controller, type Control } from "react-hook-form";

type Props = {
  control: Control<any>;
  name: string;
  length?: number;
};

export default function OtpInput({ control, name, length = 6 }: Props) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const focus = (i: number) => {
    refs.current[i]?.focus();
    refs.current[i]?.select();
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const value = (field.value as string) || "";
        const error = fieldState.error?.message;

        const digits = useMemo(
          () => Array.from({ length }, (_, i) => value[i] ?? ""),
          [value, length]
        );

        const setAll = (otp: string) => {
          field.onChange(otp.replace(/\D/g, "").slice(0, length));
        };

        const setAt = (index: number, digit: string) => {
          const next = value.split("");
          next[index] = digit;
          field.onChange(next.join("").slice(0, length));
        };

        return (
          <div className="space-y-3">
            <div className="flex justify-center gap-3">
              {digits.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => {
                    refs.current[idx] = el;
                  }}
                  value={digit}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={1}
                  onChange={(e) => {
                    const d = e.target.value.replace(/\D/g, "").slice(-1);
                    setAt(idx, d);
                    if (d && idx < length - 1) focus(idx + 1);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace") {
                      if (!digits[idx] && idx > 0) {
                        setAt(idx - 1, "");
                        focus(idx - 1);
                      } else {
                        setAt(idx, "");
                      }
                    }
                    if (e.key === "ArrowLeft" && idx > 0) focus(idx - 1);
                    if (e.key === "ArrowRight" && idx < length - 1) focus(idx + 1);
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    const paste = e.clipboardData.getData("text");
                    const cleaned = paste.replace(/\D/g, "").slice(0, length);
                    setAll(cleaned);
                    focus(Math.min(cleaned.length, length - 1));
                  }}
                  className={`h-14 w-14 rounded-xl border bg-white/5 text-center text-xl font-semibold text-white outline-none transition
                  ${
                    error
                      ? "border-red-500/40 focus:border-red-500/70"
                      : "border-white/10 focus:border-blue-500/60"
                  }`}
                />
              ))}
            </div>

            {error ? (
              <p className="text-center text-xs text-red-400">{error}</p>
            ) : null}
          </div>
        );
      }}
    />
  );
}
