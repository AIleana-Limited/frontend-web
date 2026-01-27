export type Freelancer = {
  id: string;
  name: string;
  title: string;
  tagline: string;
  rating: number;
  hourlyRate: number;
  location: string;
  availability: "Full time" | "Part time";
  skills: string[];
  avatar: string;
};
