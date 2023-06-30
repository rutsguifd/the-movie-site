import { Container, Typography } from "@mui/material";
import { filmAPI } from "../../../store/services/FilmService";
import { Link, useParams } from "react-router-dom";
import { MovieList } from "../../MovieList/MovieList";

export const GenresList = () => {
  const { data: genres } = filmAPI.useGetGenresListQuery();
  const { genreId } = useParams();
  const [getMoviesByGenre] = filmAPI.useLazyGetMoviesByGenreQuery();
  const getMovies = async (page: number) => {
    const res = await getMoviesByGenre({ page, id: genreId || "12" }).unwrap();
    return res;
  };

  return (
    <>
      <Container>
        {genres?.genres.map((genre) => (
          <Link
            to={`/genres/${genre.id}`}
            key={genre.id}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Typography
              sx={{
                display: "inline-block",
                m: 2,
                fontWeight:
                  (genreId || "12") === genre.id.toString() ? "600" : "300",
              }}
            >
              {genre.name}
            </Typography>
          </Link>
        ))}
      </Container>
      <MovieList key={genreId} getMovies={getMovies} captionText={"Genres"} />
    </>
  );
};
