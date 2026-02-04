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
  visibility: "public",
  user: { name: "Aisha", avatar: "/avatars/user2.png" },
  content:
    "I didn’t write this to be read. I recorded it to be heard...\n\nThere’s something about a human voice that text can’t carry — the pauses, the breath, the feeling between the words.\n\nThis one is short. But if you listen closely, it might stay with you longer than you expect.",
  audioUrl: "/audio/demo.mp3",
  duration: "07:19",
  hashtags: [
    "AudioPost",
    "VoiceAndMeaning",
    "SoundOverScroll",
    "CreativeExpression",
    "ListenMore",
  ],
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
    description:
      "This premium solid color casual jacket is crafted with high-quality fabric, designed for comfort, durability, and effortless style. Perfect for both formal and casual outings. Limited stock available, grab yours while it lasts.",
    images: [
      "/demo/jacket.png",
      "/demo/jacket-1.jpg",
      "/demo/jacket-2.webp",
      "/demo/jacket-3.jpg",
    ],
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
    content: "Selling this Car on live stream",
    product: {
      title: "Bugati",
      price: "₦85,000,000",
      images: ["/demo/product-5.jpg"],
      isLive: true,
      description : "This is where the product details is expected to show with other stuffs and many. The heels are handmade with premium leather, perfect for both casual and formal outings. Designed for comfort, elegance, and durability. Limited stock available, grab yours before it runs out."
  },
    liveMeta: {
    watchingCount: 34000,
    viewers: [
      "/demo/creator-3.jpg",
      "/demo/creator-1.png",
      "/demo/creator-6.png",
    ],
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
    suggestions: [
      {
        id: "u1",
        name: "Micheal Jordan",
        avatar: "/demo/creator-4.jpg",
        mutuals: 12,
      },
      {
        id: "u2",
        name: "Steph Curry",
        avatar: "/demo/creator-3.jpg",
        mutuals: 8,
      },
      {
        id: "u3",
        name: "Steve Jobs",
        avatar: "/demo/creator-1.png",
        mutuals: 5,
      },
      {
        id: "u1",
        name: "Micheal Jordan",
        avatar: "/demo/creator-4.jpg",
        mutuals: 12,
      },
      {
        id: "u2",
        name: "Steph Curry",
        avatar: "/demo/creator-3.jpg",
        mutuals: 8,
      }
    ],
  },
    {
    id: "6",
    type: "text",
    user: { name: "Brian Cage", avatar: "/avatars/user2.png" },
    time: "2h",
    visibility: "public",
    content: "Arsenal is going to win... 🥶🥶",
    stats: { likes: 12, comments: 2, shares: 1 },
    comments: [
      {
        id: "c1",
        user: {
          name: "Vivian",
          avatar: "/avatars/user3.png",
        },
        message: "I pray so oo 😭",
        likes: 2,
        time: "1h",
      },
      {
        id: "c2",
        user: {
          name: "David",
          avatar: "/avatars/user4.png",
        },
        message: "Ok motigbo 😂",
        likes: 0,
        time: "45m",
      },
    ],
  },

  {
  id: "7",
  type: "product",
  user: {
    name: "Nike Official",
    avatar: "/demo/creator-5.png",
    verified: true,
  },
  content: "Nike Air Max Pulse – Now Available",
  product: {
    title: "Nike Air Max Pulse",
    price: "₦185,000",
    description:
      "The Nike Air Max Pulse delivers an ultra-modern edge with responsive Air cushioning and a breathable mesh upper. Built for all-day comfort and street-ready performance, this sneaker blends bold design with everyday versatility. Whether you're stepping out or training lightly, the Air Max Pulse keeps you moving in style.",
    images: [
      "/demo/nike-2.jpg",
      "/demo/nike-3.webp",
      "/demo/nike-4.jpg",
    ],
  },
  stats: {
    likes: 1890,
    comments: 146,
    shares: 72,
  },
  comments: [
    {
      id: "c10",
      user: {
        name: "Tobi",
        avatar: "/avatars/user9.png",
      },
      message: "🔥🔥 This colorway is crazy",
      likes: 21,
      time: "1h",
    },
    {
      id: "c11",
      user: {
        name: "Ruth",
        avatar: "/avatars/user10.png",
      },
      message: "Do you have size 42 available?",
      likes: 8,
      time: "45m",
    },
  ],
},
{
  id: "8",
  type: "live",
  user: {
    name: "Aisha Luxe",
    avatar: "/demo/creator-4.jpg",
    verified: true,
  },
  content: "Live showcase of our new designer heels collection",
  product: {
    title: "Emerald Luxe Heels",
    price: "₦15,000",
    images: [

      "/demo/heels-3.jpg",
      "/demo/heels-4.jpg",
    ],
    isLive: true,
    description:
      "The Emerald Luxe Heels are handcrafted with premium leather and a cushioned insole for all-day comfort. Designed to elevate both casual and formal outfits, these heels blend elegance with durability. Limited pieces available during this live session only.",
  },

  liveMeta: {
    watchingCount: 18750,
    viewers: [
      "/demo/creator-2.png",
      "/demo/creator-5.png",
      "/demo/creator-8.png",
    ],
  },

  stats: {
    likes: 980,
    comments: 210,
    shares: 67,
  },

  comments: [
    {
      id: "c11",
      user: {
        name: "Loveth",
        avatar: "/avatars/user10.png",
      },
      message: "Please is size 42 available?",
      likes: 6,
      time: "8m",
    },
    {
      id: "c12",
      user: {
        name: "Kenny",
        avatar: "/avatars/user11.png",
      },
      message: "This color is so clean 😍",
      likes: 14,
      time: "3m",
    },
  ],
},

];
