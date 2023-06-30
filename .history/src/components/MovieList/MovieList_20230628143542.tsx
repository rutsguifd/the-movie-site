import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { ISearchResponse, Result } from "../../store/responses/SearchResponse";
import MovieCard from "../MovieCard";
import InfiniteScroll from 'react-infinite-scroller';


interface IMovieListProps {
  getMoviesProps?: (page: number)=>Promise<ISearchResponse>;
  captionText?: string;
}

export const MovieList: FC<IMovieListProps> = ({ getMoviesProps, captionText }) => {
  const [movieList, setMovieList] = useState<Result[]>([])
  const fetchMovies = async (page: number) => {
    if(getMoviesProps) {
    getMoviesProps(page).then((res)=> {
      setMovieList(res.results)
    }).catch((err)=>console.log(err)
    )
  }
  }
  return (
    <InfiniteScroll
    pageStart={1}
    loadMore={fetchMovies}
    hasMore={true}
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
        {movieList?.results.map((movie) => (
          <Grid item xs="auto" key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
