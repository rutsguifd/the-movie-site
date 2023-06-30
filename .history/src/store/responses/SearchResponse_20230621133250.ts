export interface ISearchResponse {
  page: number;
  result: Result[];
  total_pages: number;
  total_results: number;
}

type Result = {
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
  vote_average: string;
  vote_count: string;
};
