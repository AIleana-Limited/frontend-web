"use client";

import Link from "next/link";
import { LuBolt } from "react-icons/lu";

type Props = {
  email?: string;
  onResend?: () => void;
  onCancel?: () => void;
};

export default function CheckYourEmail({
  email = "james**@gmail.com",
}: Props) {
  const openMail = () => {
    // Best effort: works on some devices/browsers
    window.location.href = "mailto:";
  };

  return (
    <div className="w-full max-w-2xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/80">
          <div className="h-9 w-9 rounded-xl bg-white/10 flex justify-center items-center"><LuBolt /></div>
          <span className="text-lg font-medium">Alleana</span>
        </div>

        <Link
          href="/login"
          className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
        >
          Sign In
        </Link>
      </div>

      {/* Title */}
      <h1 className="mt-10 text-5xl font-semibold tracking-tight">
        Check Your Email
      </h1>

      {/* Message */}
      <p className="mt-5 max-w-xl text-base leading-relaxed text-(--text-primary)/80">
        Check your inbox! We sent a link to{" "}
        <span className="text-(--text-primary) font-medium">{email}</span> to help you get back into
        your account.
      </p>

      {/* Resend */}
      <div className="mt-14 text-base text-white/55">
        Didn’t receive the link?{" "}
        <button
          type="button"
          className="font-medium text-blue-500 hover:underline"
        >
          Resend Link
        </button>
      </div>

      {/* Buttons */}
      <div className="mt-14 grid grid-cols-2 gap-6">
        <button
          type="button"
          className="h-14 rounded-xl border border-blue-500/40 bg-transparent text-base font-medium text-white/80
          transition hover:border-blue-500/70 hover:bg-white/5"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={openMail}
          className="h-14 rounded-xl bg-blue-700/70 text-base font-medium text-white/90
          transition hover:bg-blue-700"
        >
          Open Mail
        </button>
      </div>
    </div>
  );
}
