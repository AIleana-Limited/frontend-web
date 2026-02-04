// features/feed/components/posts/LivePost.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MessageCircle, Share2, Tv } from "lucide-react";
import { FeedPost } from "@/features/feed/types";
import { PostHeader } from "../../PostHeader";
import PostComments from "../../comments/PostComments";
import LiveWatchingBar from "./LiveWatchingBar";

function shouldTruncate(text?: string, limit = 200) {
  return text ? text.length > limit : false;
}

function truncate(text?: string, limit = 200) {
  return text ? text.slice(0, limit) + "…" : "";
}

export default function LivePost({ post }: { post: FeedPost }) {
  const [showComments, setShowComments] = useState(false);
  const [expanded, setExpanded] = useState(false);

  if (!post.product || !post.product.isLive) return null;
  const description = post.product?.description ?? "";
  const showSeeMore = shouldTruncate(description);

  return (
    <div className="rounded-2xl bg-(--surface-1) overflow-hidden">
      {/* HEADER */}
      <div className="p-4">
        <PostHeader {...post} />

        {/* TEXT CONTENT */}
        {post.content && <p className="mt-2 text-lg">{post.content}</p>}

        {/* PRICE */}
        <p className="mt-1 text-lg font-semibold text-(--text-primary)">
          {post.product.price}
        </p>

        <p className="mt-1 text-sm text-(--text-primary)/70">Product Info</p>
        <p className="text-sm text-(--text-primary)/70">
          {expanded ? description : truncate(description)}
        </p>

        {showSeeMore && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-1 text-xs text-blue-500 hover:underline"
          >
            See more
          </button>
        )}
      </div>

      {/* LIVE MEDIA */}
      <div className="relative">
        {/* IMAGE / VIDEO PREVIEW */}
        <Image
          src={post.product.images[0]}
          alt={post.product.title}
          width={800}
          height={600}
          className="h-150 w-full object-cover"
        />

        {/* LIVE BADGE */}
        <span className="absolute inline-flex gap-1 items-center left-3 top-3 rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white">
         <Tv className="w--5 h-5 text-white" /> Live Now
        </span>

        {/* FLOATING ACTIONS (RIGHT) */}
        <div className="absolute right-3 bottom-20 flex flex-col items-center gap-4">
          <LiveStat
            count={post.stats?.likes}
            icon={<Heart size={18} className="text-white" />}
          />

          <LiveStat
            count={post.stats?.comments}
            icon={<MessageCircle size={18} className="text-white" />}
          />

          <LiveStat
            count={post.stats?.shares}
            icon={<Share2 size={18} className="text-white" />}
          />
        </div>

        {/* WATCH LIVE BUTTON */}
        <div className="absolute bottom-4 left-4">
          <button className="rounded-lg bg-[#2E57A2] px-4 py-2 text-sm text-white">
            Watch Live
          </button>
        </div>
      </div>

      {/* FOOTER VIEWERS */}
      {post.liveMeta && (
  <LiveWatchingBar
    watchingCount={post.liveMeta.watchingCount}
    viewers={post.liveMeta.viewers}
  />
)}

      {/* COMMENTS (toggle later if needed) */}
      {showComments && post.comments && (
        <div className="px-4 pb-4">
          <PostComments comments={post.comments} />
        </div>
      )}
    </div>
  );
}

/* ---------- Small helper ---------- */
function LiveStat({ icon, count }: { icon: React.ReactNode; count?: number }) {
  return (
    <div className="flex flex-col items-center text-xs text-white/80">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur">
        {icon}
      </span>

      {count !== undefined && <span className="mt-1">{count}</span>}
    </div>
  );
}
