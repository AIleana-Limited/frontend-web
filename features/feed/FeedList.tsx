// features/feed/FeedList.tsx
"use client";

import { posts } from "./demoPosts";
import FeedItem from "./FeedItem";

export default function FeedList() {
  return (
    <section className="flex w-full flex-col gap-6 pb-24">
      {posts.map((post) => (
        <FeedItem key={post.id} post={post} />
      ))}
    </section>
  );
}
