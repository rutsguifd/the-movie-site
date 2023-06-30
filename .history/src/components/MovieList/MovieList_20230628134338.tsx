import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { ISearchResponse } from "../../store/responses/SearchResponse";
import MovieCard from "../MovieCard";
import InfiniteScroll from 'react-infinite-scroller';


interface IMovieListProps {
  movieList?: ISearchResponse;
  captionText?: string;
}

export const MovieList: FC<IMovieListProps> = ({ movieList, captionText }) => {
  return (
    <InfiniteScroll>
      <Typography ml={4} my={2} variant="h6" fontWeight="600">
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
