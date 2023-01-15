export type Show = {
  id: number;
  image?: {
    medium: string;
    original: string;
  };
  name: string;
  genres: string[];
  rating: { average?: number };
  summary?: string;
};

export const placeholderImage =
  "https://hosting.ca/wp-content/uploads/2017/09/broken-image.png";
