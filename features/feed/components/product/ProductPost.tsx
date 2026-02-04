"use client";

import { useState } from "react";
import { PostHeader } from "../../PostHeader";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function ProductPost({ post }: any) {
  const [expanded, setExpanded] = useState(false);

   //Selected Product image state
  const images = post.product?.images || [];
  const [activeImage, setActiveImage] = useState(images[0]);

//   Product description Truncated after 200 words
  const description = post.product?.description || "";
  const isLong = description.length > 200;

  const displayText =
    !expanded && isLong
      ? description.slice(0, 200) + "..."
      : description;

  return (
    <div className="rounded-2xl bg-(--surface-1) overflow-hidden">
      {/* HEADER */}
      <div className="p-4">
        <PostHeader {...post} />
      </div>

      {/* CONTENT */}
      <div className="px-4 pb-2 space-y-1">
        {/* TEXT CONTENT */}
        {post.content && <p className=" text-lg">{post.content}</p>}

        {/* PRICE */}
        <p className="mt-1 text-lg font-semibold text-(--text-primary)">
          {post.product.price}
        </p>

        <p className="text-xs font-medium text-(--text-primary)/60">
          Product Info
        </p>

        <p className="text-sm text-(--text-primary)/70">
          {displayText}
        </p>

        {isLong && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-xs text-blue-500 hover:underline"
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}
      </div>

       {/* MAIN IMAGE */}
      {activeImage && (
        <div className="relative mt-3">
          <img
            src={activeImage}
            alt={post.product?.title}
            className="h-160 w-full object-cover"
          />

            {/* FLOATING ACTIONS (RIGHT) */}
        <div className="absolute right-3 bottom-20 flex flex-col items-center gap-4">
          <ProductStat
            count={post.stats?.likes}
            icon={<Heart size={18} className="text-white" />}
          />

          <ProductStat
            count={post.stats?.comments}
            icon={<MessageCircle size={18} className="text-white" />}
          />

          <ProductStat
            count={post.stats?.shares}
            icon={<Share2 size={18} className="text-white" />}
          />
        </div>

          {/* CTA BUTTONS */}
          <div className="absolute max-w-100 bottom-4 left-4 right-4 flex gap-3">
            <button className="flex-1 rounded-xl bg-blue-600 py-4 text-sm font-medium text-white">
              Add to Cart
            </button>
            <button className="flex-1 rounded-xl border border-blue-600 py-4 bg-white/60 text-sm font-medium text-blue-500">
              Try Virtually
            </button>
          </div>
        </div>
      )}

     {/* THUMBNAILS */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto px-4 py-3">
          {images.map((img: string) => (
            <button
              key={img}
              onClick={() => setActiveImage(img)}
              className={`h-14 w-14 rounded-full overflow-hidden border
                ${
                  activeImage === img
                    ? "border-blue-500"
                    : "border-white/10"
                }`}
            >
              <img
                src={img}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

    </div>
  );
}


/* ---------- Small helper ---------- */
function ProductStat({ icon, count }: { icon: React.ReactNode; count?: number }) {
  return (
    <div className="flex flex-col items-center text-xs text-white/80">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur">
        {icon}
      </span>

      {count !== undefined && <span className="mt-1">{count}</span>}
    </div>
  );
}