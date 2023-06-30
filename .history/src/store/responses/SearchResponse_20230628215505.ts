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

  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: string;
  vote_count: string;
};
