import { Container, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { ISearchResponse, Result } from "../../store/responses/SearchResponse";
import MovieCard from "../MovieCard";
import InfiniteScroll from "react-infinite-scroller";

interface IMovieListProps {
  getMoviesProps?: (page: number) => Promise<ISearchResponse>;
  captionText?: string;
}

export const MovieList: FC<IMovieListProps> = ({
  getMoviesProps,
  captionText,
}) => {
  const [movieList, setMovieList] = useState<Result[]>([]);
  const fetchMovies = async (page: number) => {
    if (getMoviesProps) {
      try {
        const res = await getMoviesProps(page);
        setMovieList((prev) => [...prev, ...res.results]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <InfiniteScroll pageStart={0} loadMore={fetchMovies} hasMore={true}>
      <Typography ml={4} my={2} variant="h6" fontWeight="600">
        {captionText}
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnGap={2}
        sx={{ justifyContent: "center", overflow: "auto", height: "200vh" }}
      >
        {movieList?.map((movie) => (
          <Grid item xs="auto" key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};
