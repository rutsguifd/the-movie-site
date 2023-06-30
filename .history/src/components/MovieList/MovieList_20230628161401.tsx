import { Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
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
  const [pageQ, setPageQ] = useState(1);
  // const getMovies = async (page: number) => {
  //   console.log("called from top rated");

  //   const res = await getTrendingMovies(page).unwrap();
  //   return res;
  // };
  const [movieList, setMovieList] = useState<Result[]>([]);

  const fetchMovies = async () => {
    const res = await getTrendingMovies(pageQ).unwrap();
    console.log(res);
    setMovieList((prev) => [...prev]);
    setMovieList((prev) => [...prev, ...res.results]);
    setPageQ(pageQ + 1);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <InfiniteScroll
      dataLength={movieList.length}
      next={fetchMovies}
      hasMore={true}
      loader={<div>loading</div>}
    >
      <Typography ml={4} my={2} variant="h6" fontWeight="600">
        {captionText}
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnGap={2}
        sx={{ justifyContent: "center" }}
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
