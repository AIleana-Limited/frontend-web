// features/freelancer/types.ts

export type FreelancerAvailability = "Full time" | "Part time";

export type FreelancerReview = {
  id: string;
  clientName: string;
  rating: number;
  comment: string;
};

export type FreelancerPortfolioItem = {
  id: string;
  title: string;
  role: string;
  techStack: string[];
  overview: string;
};

export type Freelancer = {
  id: string;

  /* BASIC INFO (used in cards & header) */
  name: string;
  title: string;
  rank: string;
  tagline: string;
  avatar: string;
  coverImage?: string;
  rating: number;
  hourlyRate: number;
  location: string;
  availability: FreelancerAvailability;
  skills: string[];

  /* PROFILE TAB */
  about?: string;

  /* REVIEWS TAB */
  reviews?: FreelancerReview[];

  /* PORTFOLIO TAB */
  portfolio?: FreelancerPortfolioItem[];
};
