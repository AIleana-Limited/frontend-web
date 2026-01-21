"use client";

import { Check } from "lucide-react";
import Link from "next/link";

type Props = {
  title?: string;
  message?: string;
  buttonText?: string;
  href?: string;
};

export default function EmailVerifiedSuccess({
  title = "Email Verified Successfully!",
  message = "Thanks for verifying your email. Your account is now activated.",
  buttonText = "Sign In",
  href = "/login",
}: Props) {
  return (
    <div className="min-h-screen px-4 py-10 text-(--text-primary)">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-center">
        <div className="w-full rounded-3xl  px-6 py-14 shadow-2xl">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            {/* Icon */}
            <div className="grid h-28 w-28 place-items-center rounded-full bg-white/90">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-emerald-500">
                <Check className="h-10 w-10 text-white" strokeWidth={3} />
              </div>
            </div>

            {/* Text */}
            <h1 className="mt-8 text-4xl font-semibold tracking-tight">
              {title}
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              {message}
            </p>

            {/* CTA */}
            <Link
              href={href}
              className="mt-10 flex h-12 w-full max-w-md items-center justify-center rounded-xl bg-blue-700/70
              text-sm font-medium text-white/90 transition hover:bg-blue-700"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
