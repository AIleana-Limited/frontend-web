// demoCreators.ts

type DemoCreator = {
  id: string;
  image: string;
  name: string;
  category: string;
  watching?: string;
  live?: boolean;
};

/* -----------------------------
   BASE SOURCE OF TRUTH
-------------------------------- */
const baseCreators: DemoCreator[] = [
  {
    id: "1",
    image: "/demo/creator-1.png",
    name: "KSIDStreamer",
    category: "Entertainment",
    watching: "2.4k",
    live: true,
  },
  {
    id: "2",
    image: "/demo/creator-2.png",
    name: "Sosojenny",
    category: "Music",
  },
  {
    id: "3",
    image: "/demo/creator-3.jpg",
    name: "LOVAGAL",
    category: "Lifestyle",
  },
  {
    id: "4",
    image: "/demo/creator-4.jpg",
    name: "Ishowspeed",
    category: "Entertainment",
    watching: "2.4k",
    live: true,
  },
  {
    id: "5",
    image: "/demo/creator-5.png",
    name: "JadeFash",
    category: "Fashion",
  },
  {
    id: "6",
    image: "/demo/creator-6.png",
    name: "BellaGlow",
    category: "Beauty",
    watching: "1.1k",
    live: true,
  },
  {
    id: "7",
    image: "/demo/creator-7.png",
    name: "UrbanLeo",
    category: "Lifestyle",
  },
  {
    id: "8",
    image: "/demo/creator-8.png",
    name: "TuneFlow",
    category: "Music",
    watching: "3.6k",
    live: true,
  },
  {
    id: "9",
    image: "/demo/creator-9.png",
    name: "FitQueen",
    category: "Fitness",
  },
  {
    id: "10",
    image: "/demo/creator-10.png",
    name: "MovieMania",
    category: "Entertainment",
  },
];

/* -----------------------------
   HELPER (local, simple)
-------------------------------- */
function reorder<T>(arr: T[], order: number[]): T[] {
  return order.map((i) => arr[i]).filter(Boolean);
}

/* -----------------------------
   EXPORTED DEMO VARIANTS
-------------------------------- */

export const demoCreators1 = reorder(baseCreators, [0, 1, 2, 3, 4, 5,6,7,8,9]);

export const demoCreators2 = reorder(baseCreators, [3, 0, 5, 1, 6, 2,7,8,9,3]);

export const demoCreators3 = reorder(baseCreators, [7, 3, 1, 9, 4, 0,5,6,8,2]);

export const demoCreators4 = reorder(baseCreators, [2, 6, 8, 1, 5, 3,7,9,4,0]);

export const demoCreators5 = reorder(baseCreators, [9, 4, 0, 7, 2, 6,3,8,1,5]);

export const demoCreators6 = reorder(baseCreators, [5, 8, 3, 1, 9, 4]);
