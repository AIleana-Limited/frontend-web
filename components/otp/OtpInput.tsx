"use client";

import { useRef } from "react";
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
        const value = String(field.value ?? "");
        const error = fieldState.error?.message;

        // Always produce fixed-length array
        const digits = Array.from({ length }, (_, i) => value[i] ?? "");

        const updateDigits = (nextDigits: string[]) => {
          field.onChange(nextDigits.join(""));
        };

        const setAt = (index: number, digit: string) => {
          const next = [...digits];
          next[index] = digit;
          updateDigits(next);
        };

        const setAll = (otp: string) => {
          const cleaned = otp.replace(/\D/g, "").slice(0, length);
          const next = Array.from({ length }, (_, i) => cleaned[i] ?? "");
          updateDigits(next);
          focus(Math.min(cleaned.length, length - 1));
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
                      e.preventDefault();

                      if (digits[idx]) {
                        // Clear current box
                        setAt(idx, "");
                      } else if (idx > 0) {
                        // Move back and clear previous box
                        setAt(idx - 1, "");
                        focus(idx - 1);
                      }
                    }

                    if (e.key === "ArrowLeft" && idx > 0) focus(idx - 1);
                    if (e.key === "ArrowRight" && idx < length - 1) focus(idx + 1);
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    setAll(e.clipboardData.getData("text"));
                  }}
                  className={`md:h-14 md:w-14 h-10 w-10 rounded-xl border bg-white/5 text-center text-xl font-semibold text-white outline-none transition
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
