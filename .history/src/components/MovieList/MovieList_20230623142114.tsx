import { Grid } from "@mui/material";
import { FC } from "react";
import { ISearchResponse } from "../../store/responses/SearchResponse";
import MovieCard from "../MovieCard";

interface IMovieListProps {
  movieList?: ISearchResponse;
}

export const MovieList: FC<IMovieListProps> = ({ movieList }) => {
  console.log(movieList);

  return (
    <Grid
      container
      rowSpacing={2}
      columnGap={2}
      sx={{ justifyContent: "center" }}
    >
      {movieList?.results.map((movie) => (
        <Grid item xs="auto" key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};
