"use client";

import { Smile } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";

export default function LiveInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showEmoji, setShowEmoji] = useState(false);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    const input = inputRef.current;
    if (!input) return;

    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;

    const value = input.value;
    const next =
      value.slice(0, start) + emojiData.emoji + value.slice(end);

    input.value = next;
    input.focus();
    input.setSelectionRange(
      start + emojiData.emoji.length,
      start + emojiData.emoji.length
    );

    setShowEmoji(false);
  };

  return (
    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-8">
      {/* INPUT + EMOJI */}
      <div className="relative flex flex-1 items-center gap-2 rounded-xl bg-[#414141] px-4 py-4">
        <input
          ref={inputRef}
          placeholder="Type a message..."
          className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/50"
        />

        {/* Emoji trigger */}
        <button
          type="button"
          onClick={() => setShowEmoji((v) => !v)}
        >
          <Smile className="h-5 w-5 text-white/60" />
        </button>

        {/* Emoji picker */}
        {showEmoji && (
          <div className="absolute bottom-14 right-0 z-50">
            <EmojiPicker
              theme={Theme.DARK}
              onEmojiClick={handleEmojiClick}
              searchDisabled
              skinTonesDisabled
              previewConfig={{ showPreview: false }}
            />
          </div>
        )}
      </div>

      {/* ACTION ICONS */}
      <div className="flex gap-4">
        <button>
          <Image src="/icons/tradebits.png" alt="tradebits" width={30} height={30} />
        </button>
        <button>
          <Image src="/icons/credix.png" alt="credix" width={30} height={30} />
        </button>
        <button>
          <Image src="/icons/likes.png" alt="likes" width={30} height={30} />
        </button>
        <button>
          <Image src="/icons/share.png" alt="share" width={30} height={30} />
        </button>
      </div>
    </div>
  );
}
