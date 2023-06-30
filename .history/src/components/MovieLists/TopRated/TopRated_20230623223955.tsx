import { Box, Container } from "@mui/material";
import { filmAPI } from "../../../store/services/FilmService";
import { MovieList } from "../../MovieList/MovieList";

export const TopRated = () => {
  const { data: movieList } = filmAPI.useGetTrendingMoviesQuery();
  return (
    <Container>
      <MovieList movieList={movieList} />
    </Container>
  );
};
