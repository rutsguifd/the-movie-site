import { Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { ISearchResponse, Result } from "../../store/responses/SearchResponse";
import MovieCard from "../MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";

interface IMovieListProps {
  getMovies: (page: number) => Promise<ISearchResponse>;
  captionText: string;
}

export const MovieList: FC<IMovieListProps> = ({ getMovies, captionText }) => {
  const [pageQ, setPageQ] = useState(1);

  const [movieList, setMovieList] = useState<Result[]>([]);

  const fetchMovies = async () => {
    const res = await getMovies(pageQ);
    setMovieList((prev) => prev.concat(res.results));
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
      scrollThreshold={200}
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
