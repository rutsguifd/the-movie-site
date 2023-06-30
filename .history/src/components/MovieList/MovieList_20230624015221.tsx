import { Grid, Typography } from "@mui/material";
import { ISearchResponse } from "../../store/responses/SearchResponse";
import MovieCard from "../MovieCard";

interface IMovieListProps {
  movieList?: ISearchResponse;
}

export const MovieList = (
  { movieList }: IMovieListProps,
  captionText: string
) => {
  return (
    <>
      <Typography my={2} variant="h6" fontWeight="600">
        {captionText}
      </Typography>
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
    </>
  );
};
