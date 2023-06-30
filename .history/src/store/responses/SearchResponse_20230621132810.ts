export interface ISearchResponse {
    page: number,
    result: 
}

type Result = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
}