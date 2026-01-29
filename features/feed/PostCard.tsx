"use client";

import Image from "next/image";
import clsx from "clsx";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Bookmark,
  Share2,
  Globe,
  Radio,
} from "lucide-react";

export type Post = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  time: string;
  visibility?: "public" | "friends";
  content?: string;

  // media types
  image?: string; // single image
  images?: string[]; // collage

  // link preview
  linkPreview?: {
    domain: string;
    title: string;
    description: string;
    image: string;
  };

  // live badge
  isLive?: boolean;

  stats?: {
    likes: number;
    comments: number;
    reposts: number;
    saves: number;
    shares: number;
  };
};

function StatIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button className="group flex items-center gap-2 text-(--text-primary)/60 transition hover:text-(--text-primary)">
      {children}
      <span className="text-sm text-(--text-primary)/70 group-hover:text-(--text-primary)">
        {label}
      </span>
    </button>
  );
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="w-full overflow-hidden rounded-[26px] bg-white/5 ring-1 ring-white/10 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-start gap-3 px-5 pt-5">
        <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10">
          <Image
            src={post.user.avatar}
            alt={post.user.name}
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-(--text-primary)/90">
              {post.user.name}
            </p>
          </div>

          <div className="mt-0.5 flex items-center gap-2 text-xs text-(--text-primary)/40">
            <span>{post.time}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Globe className="h-3.5 w-3.5" />
              {post.visibility === "friends" ? "Friends" : "Public"}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      {post.content && (
        <div className="px-5 pt-3">
          <p className="text-sm leading-relaxed text-(--text-primary)/75">
            {post.content}
          </p>
        </div>
      )}

      {/* Media */}
      <div className="mt-4">
        {/* Live style image */}
        {post.image && (
          <div className="relative w-full">
            <Image
              src={post.image}
              alt="Post image"
              width={1200}
              height={800}
              className="h-[280px] w-full object-cover sm:h-[340px]"
            />

            {post.isLive && (
              <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-xs font-semibold text-white">
                <Radio className="h-4 w-4" />
                Live Now
              </div>
            )}
          </div>
        )}

        {/* Collage (like shoes post) */}
        {post.images?.length ? (
          <div className="grid grid-cols-2 gap-1">
            <div className="relative col-span-1 row-span-2 h-[280px] overflow-hidden">
              <Image
                src={post.images[0]}
                alt="post image 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[139px] overflow-hidden">
              <Image
                src={post.images[1]}
                alt="post image 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[139px] overflow-hidden">
              <Image
                src={post.images[2]}
                alt="post image 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ) : null}

        {/* Link Preview (NYTimes style) */}
        {post.linkPreview && (
          <div className="border-t border-white/10 bg-white/5">
            <div className="relative h-[220px] w-full">
              <Image
                src={post.linkPreview.image}
                alt={post.linkPreview.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="px-5 py-4">
              <p className="text-[11px] uppercase tracking-wide text-(--text-primary)/40">
                {post.linkPreview.domain}
              </p>

              <p className="mt-1 text-sm font-semibold text-(--text-primary)/85">
                {post.linkPreview.title}
              </p>

              <p className="mt-1 text-xs text-(--text-primary)/45 line-clamp-2">
                {post.linkPreview.description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer actions */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-5">
          <StatIcon label={`${post.stats?.likes ?? 0}`}>
            <Heart className="h-5 w-5" />
          </StatIcon>

          <StatIcon label={`${post.stats?.comments ?? 0}`}>
            <MessageCircle className="h-5 w-5" />
          </StatIcon>

          <StatIcon label={`${post.stats?.reposts ?? 0}`}>
            <Repeat2 className="h-5 w-5" />
          </StatIcon>
        </div>

        <div className="flex items-center gap-5">
          <StatIcon label={`${post.stats?.saves ?? 0}`}>
            <Bookmark className="h-5 w-5" />
          </StatIcon>

          <StatIcon label={`${post.stats?.shares ?? 0}`}>
            <Share2 className="h-5 w-5" />
          </StatIcon>
        </div>
      </div>
    </article>
  );
}
