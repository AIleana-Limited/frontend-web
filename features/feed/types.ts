// features/feed/types.ts

export type PostType =
  | "text"
  | "image"
  | "gallery"
  | "live"
  | "product"
  | "audio"
  | "suggested_friends";

/* -------------------- USERS & COMMENTS -------------------- */

export type Comment = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  message: string;
  likes: number;
  time: string;
};

/* -------------------- SUGGESTED FRIENDS -------------------- */

export type SuggestedFriend = {
  id: string;
  name: string;
  avatar: string;
  mutuals?: number; // optional like Facebook
};

/* -------------------- FEED POST -------------------- */

export type FeedPost = {
  id: string;
  type: PostType;

  /* ---------- common post fields ---------- */
  user?: {
    name: string;
    avatar: string;
    verified?: boolean;
  };

  time?: string;
  visibility?: "public" | "friends" | "private";

  content?: string;

  image?: string;
  images?: string[];

  audioUrl?: string;
  duration?: string;

  hashtags?: string[];

  product?: {
    title: string;
    price: string;
    images: string[];
    isLive?: boolean;
  };

  stats?: {
    likes: number;
    comments: number;
    shares: number;
  };

  comments?: Comment[];

  /* ---------- suggested friends ONLY ---------- */
  suggestions?: SuggestedFriend[];
};
