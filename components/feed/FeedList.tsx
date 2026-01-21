"use client";

import PostCard, { Post } from "@/components/feed/PostCard";

const posts: Post[] = [
  {
    id: "1",
    user: { name: "Indian Cricket Team", avatar: "/avatars/india.jpg" },
    time: "5h",
    visibility: "public",
    content:
      "India has been touring Australia since 1947, but all that changed after winning the first and third Tests in Adelaide and Melbourne, respectively.",
    linkPreview: {
      domain: "NYTIMES.COM",
      title: "Small Bedroom Ideas: The Best Ways to Maximise Your Tiny Space",
      description:
        "We consulted five design experts and tested gear in a 275-square-foot apartment to find the best multifunction...",
      image: "/post/cricket.png",
    },
    stats: { likes: 1200, comments: 324, reposts: 24, saves: 24, shares: 24 },
  },

  {
    id: "2",
    user: { name: "Vivian", avatar: "/avatars/user1.png" },
    time: "5h",
    visibility: "public",
    content:
      "Support my live shopping session. All items 20% off for the next hour",
    image: "/post/live.png",
    isLive: true,
    stats: { likes: 1200, comments: 324, reposts: 24, saves: 24, shares: 24 },
  },

  {
    id: "3",
    user: { name: "Aisha", avatar: "/avatars/user2.png" },
    time: "5h",
    visibility: "public",
    content: "This new shoe is here for pre-order now",
    images: ["/post/shoe-1.png", "/post/shoe-2.png", "/post/shoe-3.png"],
    stats: { likes: 1200, comments: 324, reposts: 24, saves: 24, shares: 24 },
  },

  {
    id: "4",
    user: { name: "Tech News Hub", avatar: "/avatars/tech.jpeg" },
    time: "1h",
    visibility: "public",
    content:
      "This UI layout is so clean. Would you prefer compact cards or full-width feed posts?",
    image: "/post/ui.jpg",
    stats: { likes: 842, comments: 90, reposts: 11, saves: 34, shares: 12 },
  },

  {
    id: "5",
    user: { name: "Travel Diaries", avatar: "/avatars/user2.png" },
    time: "30m",
    visibility: "public",
    content:
      "Sunset views + calm waters. One of the best evenings I’ve had this year 🌅✨",
    image: "/post/travel.jpg",
    stats: { likes: 430, comments: 52, reposts: 5, saves: 18, shares: 7 },
  },
];

export default function FeedList() {
  return (
    <section className="flex w-full flex-col gap-6 mb-20">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
