export type KeywordSearchItem = {
  id: number;
  name: string;
};

export interface IKeywordSearchResponse {
  page: number;
  results: KeywordSearchItem[];
  total_pages: number;
  total_results: number;
}

export interface IGenresResponse {
  genres: {
    id: number;
    name: string;
  }[];
}

export interface IMovieStorage {
  id: number;
  title: string | undefined;
  poster_path: string;
  genres?: { id: number; name: string }[];
  genre_ids?: number[];
  release_date: string | undefined;
}
