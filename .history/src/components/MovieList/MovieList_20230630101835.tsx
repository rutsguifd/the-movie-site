import { Container, Grid, LinearProgress, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import {
  IMovieDetails,
  ISearchResponse,
  Result,
} from "../../store/responses/SearchResponse";
import MovieCard from "../MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { filmAPI } from "../../store/services/FilmService";
import { FavoriteMovieCard } from "../MovieCard/FavoriteMovieCard";
import EndLoader from "../UI/EndLoader";

interface IMovieListProps {
  getMovies?: (page: number) => Promise<ISearchResponse>;
  captionText: string;
  isHorizontal?: boolean;
  sm?: number;
  movies?: IMovieDetails[];
}

export const MovieList: FC<IMovieListProps> = ({
  getMovies,
  captionText,
  isHorizontal,
  sm,
  movies,
}) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movieList, setMovieList] = useState<Result[]>([]);

  const { data: genres } = filmAPI.useGetGenresListQuery();

  const fetchMovies = async () => {
    if (getMovies) {
      const res = await getMovies(page);
      setMovieList((prev) => prev.concat(res.results));
      setTotalPages(res.total_pages);
      setPage(page + 1);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  if (movies) {
    return (
      <Container>
        <Typography ml={4} my={2} variant="h6" fontWeight="600">
          {captionText}
        </Typography>
        <Grid
          container
          spacing={2}
          sx={
            isHorizontal
              ? {
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                }
              : { justifyContent: { xs: "center", sm: "flex-start" } }
          }
        >
          {movies.map((movie) => (
            <Grid item xs="auto" sm={sm ? sm : "auto"} key={movie.id}>
              <FavoriteMovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  return (
    <InfiniteScroll
      dataLength={movieList.length}
      next={fetchMovies}
      hasMore={totalPages !== page - 1}
      loader={<LinearProgress sx={{ my: 4 }} color="secondary" />}
      endMessage={!isHorizontal ? <EndLoader /> : null}
    >
      <Typography ml={4} my={2} variant="h6" fontWeight="600">
        {captionText}
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnGap={2}
        sx={
          isHorizontal
            ? {
                justifyContent: "flex-start",
                flexDirection: "row",
                flexWrap: "nowrap",
              }
            : { justifyContent: "center" }
        }
      >
        {movieList?.map((movie) => (
          <Grid item xs="auto" sm={sm ? sm : "auto"} key={movie.id}>
            <MovieCard movie={movie} genresList={genres?.genres || []} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};
