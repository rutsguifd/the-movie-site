import { Typography } from "@mui/material";
import { filmAPI } from "../../../store/services/FilmService";
import { MovieList } from "../../MovieList/MovieList";

export const TopRated = () => {
  const { data: movieList } = filmAPI.useGetTrendingMoviesQuery();
  return (
    <>
      <Typography ml={6} my={2} variant="h6" fontWeight="600">
        Trending
      </Typography>
      <MovieList movieList={movieList} />
    </>
  );
};
