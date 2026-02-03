// features/feed/demoPosts.ts
import { FeedPost } from "./types";

export const posts: FeedPost[] = [
  {
    id: "1",
    type: "text",
    user: { name: "Brian Cage", avatar: "/avatars/user1.png" },
    time: "2h",
    visibility: "private",
    content: "The weather is so cold... 🥶🥶",
    stats: { likes: 12, comments: 2, shares: 1 },
    comments: [
      {
        id: "c1",
        user: {
          name: "Vivian",
          avatar: "/avatars/user3.png",
        },
        message: "Same here 😭",
        likes: 2,
        time: "1h",
      },
      {
        id: "c2",
        user: {
          name: "David",
          avatar: "/avatars/user4.png",
        },
        message: "Weather don change o 😂",
        likes: 0,
        time: "45m",
      },
    ],
  },

  {
    id: "2",
    type: "audio",
    user: { name: "Aisha", avatar: "/avatars/user2.png" },
    content:
      "I didn’t write this to be read. I recorded it to be heard...",
    audioUrl: "/audio/demo.mp3",
    duration: "07:19",
    stats: { likes: 324, comments: 54, shares: 12 },
    comments: [
      {
        id: "c3",
        user: {
          name: "Sarah",
          avatar: "/avatars/user5.png",
        },
        message: "This touched me deeply ❤️",
        likes: 12,
        time: "3h",
      },
    ],
  },

  {
    id: "3",
    type: "product",
    user: { name: "Aisha", avatar: "/avatars/user3.png" },
    content: "Men Solid Color Casual Jacket",
    product: {
      title: "Casual Jacket",
      price: "₦42,000",
      images: ["/post/jacket.png"],
    },
    stats: { likes: 324, comments: 23, shares: 10 },
    comments: [
      {
        id: "c4",
        user: {
          name: "Mark",
          avatar: "/avatars/user6.png",
        },
        message: "Is this available in black?",
        likes: 4,
        time: "2h",
      },
    ],
  },

  {
    id: "4",
    type: "live",
    user: { name: "Sarah Kee", avatar: "/avatars/user4.png" },
    content: "Selling this shoe on live stream",
    product: {
      title: "Green Heels",
      price: "₦15,000",
      images: ["/post/shoe.png"],
      isLive: true,
    },
    stats: { likes: 1200, comments: 324, shares: 24 },
    comments: [
      {
        id: "c5",
        user: {
          name: "Chukwuka",
          avatar: "/avatars/user7.png",
        },
        message: "How much last?",
        likes: 8,
        time: "10m",
      },
      {
        id: "c6",
        user: {
          name: "Zachs",
          avatar: "/avatars/user8.png",
        },
        message: "Nice shoe 🔥",
        likes: 15,
        time: "5m",
      },
    ],
  },

  {
    id: "5",
    type: "suggested_friends",
    // no comments, no stats (Facebook style)
  },
];
