"use client";

import { useState } from "react";
import { Controller, type Control } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

type FormPasswordProps = {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
};

export default function FormPassword({
  control,
  name,
  label,
  placeholder,
className
}: FormPasswordProps) {
  const [show, setShow] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const error = fieldState.error?.message;

        return (
          <div className={`space-y-2 ${className}`}>
            <label className="text-sm text-(--text-primary)/80">{label}</label>

            <div
              className={`flex h-11 w-full items-center gap-2 rounded-xl border bg-(--surface-1) px-4 transition
              ${
                error
                  ? "border-red-500/40 focus-within:border-red-500/60"
                  : "border-border focus-within:border-border"
              }`}
            >
              <input
                {...field}
                type={show ? "text" : "password"}
                placeholder={placeholder}
                className="h-full w-full bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-primary)/40"
              />

              <button
                type="button"
                onClick={() => setShow((p) => !p)}
                className="text-(--text-primary)/60 hover:text-(--text-primary)/70"
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
