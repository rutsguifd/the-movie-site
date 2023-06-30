import { Container, Typography } from "@mui/material";
import { filmAPI } from "../../../store/services/FilmService";
import { useNavigate, useParams } from "react-router-dom";
import { MovieList } from "../../MovieList/MovieList";

export const GenresList = () => {
  const navigate = useNavigate();
  const { data: genres } = filmAPI.useGetGenresListQuery();
  const { genreId } = useParams();
  const [getMoviesByGenre] = filmAPI.useLazyGetMoviesByGenreQuery();
  const getMovies = async (page: number) => {
    const res = await getMoviesByGenre({ page, id: genreId || "12" }).unwrap();
    return res;
  };
  const onClickHandler = () => {
    navigate(`/genres/${genreId}`);
  };
  return (
    <>
      <Container>
        {genres?.genres.map((genre) => (
          <Typography
            onClick={onClickHandler}
            sx={{
              display: "inline-block",
              m: 2,
              fontWeight:
                (genreId || "12") === genre.id.toString() ? "600" : "300",
            }}
            key={genre.id}
          >
            {genre.name}
          </Typography>
        ))}
      </Container>
      <MovieList getMovies={getMovies} captionText={"Trending T"} />
    </>
  );
};
