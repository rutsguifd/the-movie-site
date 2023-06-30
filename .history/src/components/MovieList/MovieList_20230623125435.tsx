import { Grid } from "@mui/material";
import { FC } from "react";
import { ISearchResponse } from "../../store/responses/SearchResponse";
import MovieCard from "../MovieCard";

interface IMovieListProps {
  movieList?: ISearchResponse;
}

export const MovieList: FC<IMovieListProps> = ({ movieList }) => {
  return (
    <Grid container>
      {movieList?.results.map((movie) => (
        <Grid item xl={3} lg={4} sm={6} xs={12} display="flex" key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};
