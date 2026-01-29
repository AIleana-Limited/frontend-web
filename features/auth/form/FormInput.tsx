"use client";

import { Controller, type Control } from "react-hook-form";

type FormInputProps = {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
};

export default function FormInput({
  control,
  name,
  label,
  placeholder,
  type = "text",
  className = "",
}: FormInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const error = fieldState.error?.message;

        return (
          <div className={`space-y-2 ${className}`}>
            <label className="text-sm text-(--text-primary)/80">{label}</label>

            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`h-11 w-full rounded-xl border bg-white/5 px-4 text-sm text-(--text-primary) outline-none transition
              placeholder:text-white/30
              ${
                error
                  ? "border-red-500/40 focus:border-red-500/60"
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
  );
}
