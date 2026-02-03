// features/feed/types.ts

export type PostType =
  | "text"
  | "image"
  | "gallery"
  | "live"
  | "product"
  | "audio"
  | "suggested_friends";

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

export type FeedPost = {
  id: string;
  type: PostType;

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

  hashtags?: string[]; // ✅ ADD THIS

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
};
