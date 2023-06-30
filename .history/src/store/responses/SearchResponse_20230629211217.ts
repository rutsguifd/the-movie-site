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

export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
