import { Typography } from "@mui/material";
import { filmAPI } from "../../../store/services/FilmService";
import { MovieList } from "../../MovieList/MovieList";

export const TopRated = () => {
  const { data: movieList } = filmAPI.useGetTrendingMoviesQuery();
  return (
    <>
      <Typography variant="h5" fontWeight="semibold">
        Trending
      </Typography>
      <MovieList movieList={movieList} />
    </>
  );
};
