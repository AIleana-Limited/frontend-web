"use client";

import { useState } from "react";
import { Controller, type Control } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

type FormPasswordProps = {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
};

export default function FormPassword({
  control,
  name,
  label,
  placeholder,
}: FormPasswordProps) {
  const [show, setShow] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const error = fieldState.error?.message;

        return (
          <div className="space-y-2">
            <label className="text-sm text-white/70">{label}</label>

            <div
              className={`flex h-11 w-full items-center gap-2 rounded-xl border bg-white/5 px-4 transition
              ${
                error
                  ? "border-red-500/40 focus-within:border-red-500/60"
                  : "border-white/10 focus-within:border-white/20"
              }`}
            >
              <input
                {...field}
                type={show ? "text" : "password"}
                placeholder={placeholder}
                className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
              />

              <button
                type="button"
                onClick={() => setShow((p) => !p)}
                className="text-white/40 hover:text-white/70"
              >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {error ? (
              <p className="text-xs text-red-400">{error}</p>
            ) : null}
          </div>
        );
      }}
    />
  );
}
