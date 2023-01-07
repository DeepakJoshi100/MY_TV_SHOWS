export type Show = {
  id: number;
  image?: {
    medium: string;
    original: string;
  };
  name: string;
  genres: string[];
  rating: { average?: number };
  summery?: string;
};
