export interface ISearchResponse {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export type SearchQuery = {
  searchQuery: string;
  page: number;
};

export type Result = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  name?: string;
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  video: boolean;
  vote_average: string;
  vote_count: string;
};

interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: { id: number; name: string }[];
}
