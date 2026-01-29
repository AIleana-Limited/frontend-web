export type LiveUser = {
  id: string;
  name: string;
  avatar: string;
  badge?: string;
};

export type LiveStats = {
  tradbits: number;
  credits: number;
  likes: number;
  shares: number;
  viewers: number;
};

export type LiveComment = {
  id: string;
  user: LiveUser;
  message: string;
};

export type LiveSession = {
  host: LiveUser;
  stats: LiveStats;
  comments: LiveComment[];
};
