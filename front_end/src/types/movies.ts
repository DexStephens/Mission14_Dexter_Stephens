export type Movie = {
  movieId: number;
  category: string;
  title: string;
  year: number | string;
  director: string;
  rating: string;
  edited?: string;
  lentTo: string;
  notes: string;
};
