import React from "react";

type SocialButtonProps = {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
};

export default function SocialButton({ icon, text, onClick }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-blue-500/30
      bg-black/30 text-sm text-white/80 transition hover:border-blue-500/60 hover:bg-white/5"
    >
      <span className="text-white">{icon}</span>
      <span>{text}</span>
    </button>
  );
}
