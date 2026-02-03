"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { PostHeader } from "../PostHeader";
import PostActions from "../PostActions";
import PostComments from "../comments/PostComments";

export default function AudioPost({ post }: any) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="rounded-2xl bg-(--surface-1) p-4">
      {/* HEADER */}
      <div className="mb-3">
        <PostHeader {...post} />
      </div>

      {/* TEXT CONTENT */}
      {post.content && (
        <p className="mb-4 whitespace-pre-line text-sm leading-relaxed text-white/90">
          {post.content}
        </p>
      )}

      {/* HELPER TEXT */}
      <p className="mb-3 flex items-center gap-2 text-xs text-white/60">
        🎧 Press play when you’re ready.
      </p>
      
{/* HASHTAGS */}
{post.hashtags && post.hashtags.length > 0 && (
  <div className="mb-4 flex flex-wrap gap-2 text-xs text-blue-500">
    {post.hashtags.map((tag: string) => (
      <span key={tag}>#{tag}</span>
    ))}
  </div>
)}

      {/* AUDIO PLAYER */}
      <div className="rounded-xl bg-white/10 px-4 py-3">
        <div className="flex items-center gap-4">
          {/* PLAY / PAUSE */}
          <button
            onClick={togglePlay}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          {/* WAVEFORM (visual, API-safe) */}
          <div className="flex flex-1 items-center gap-[3px]">
            {Array.from({ length: 32 }).map((_, i) => (
              <span
                key={i}
                className="block w-[2px] rounded-full bg-white/60"
                style={{
                  height: `${6 + (i % 5) * 4}px`,
                  opacity: 0.4,
                }}
              />
            ))}
          </div>

          {/* DURATION */}
          <span className="text-xs text-white/70">
            {post.duration}
          </span>
        </div>

        {/* REAL AUDIO ELEMENT */}
        <audio
          ref={audioRef}
          src={post.audioUrl}
          preload="metadata"
          onEnded={() => setIsPlaying(false)}
        />
      </div>

      {/* ACTIONS */}
      <PostActions
        stats={post.stats}
        onComment={() => setShowComments((v) => !v)}
      />

      {/* COMMENTS */}
      {showComments && (
        <PostComments comments={post.comments} />
      )}
    </div>
  );
}
