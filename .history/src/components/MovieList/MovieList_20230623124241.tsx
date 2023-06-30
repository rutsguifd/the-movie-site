import { Grid } from "@mui/material";
import { filmAPI } from "../../store/services/FilmService";
import MovieCard from "../MovieCard";

export const MovieList = () => {
  const { data } = filmAPI.useGetTrendingMoviesQuery();
  console.log(data);
  return (
    <>
      {data?.results.map((movie) => (
        <Grid item xl={3} lg={4} sm={6} xs={12} display="flex" key={beer.id}>
          <MovieCard movie={movie} key={movie.id} />
        </Grid>
      ))}
    </>
  );
};
