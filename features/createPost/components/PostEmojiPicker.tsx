"use client";

import { Smile } from "lucide-react";

export default function PostEmojiPicker() {
  return (
    <button
      type="button"
      className="rounded-full p-2 text-white/60 hover:bg-white/10"
    >
      <Smile size={18} />
    </button>
  );
}
