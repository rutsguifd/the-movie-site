import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Result } from "../../store/responses/SearchResponse";
import MovieCard from "../MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { filmAPI } from "../../store/services/FilmService";

interface IMovieListProps {
  //getMoviesProps?: (page: number) => Promise<ISearchResponse>;
  captionText?: string;
}

export const MovieList: FC<IMovieListProps> = ({ captionText }) => {
  const [getTrendingMovies] = filmAPI.useLazyGetTrendingMoviesQuery();
  // const getMovies = async (page: number) => {
  //   console.log("called from top rated");

  //   const res = await getTrendingMovies(page).unwrap();
  //   return res;
  // };
  const [movieList, setMovieList] = useState<Result[]>([]);
  const fetchMovies = async (page: number) => {
    try {
      const res = await getTrendingMovies(page).unwrap();
      setMovieList((prev) => [...prev, ...res.results]);
    } catch (error) {
      console.log(error);
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
        sx={{ justifyContent: "center", overflow: "auto" }}
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
