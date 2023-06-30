import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { IMAGE_BASE_URL } from "../../utils/constants";
import { filmAPI } from "../../store/services/FilmService";
import SearchInput from "../SearchInput";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useFavorite } from "../../hooks/useFavorite";
import { Result } from "../../store/responses/SearchResponse";
import { bindMovieGenres } from "../../utils/bindMovieGenres";

const styles = {
  imgBox: {
    width: "100%",
    height: "40vh",
    objectFit: "cover",
    filter: "blur(5px)",
  },
  button: {
    height: "50px",
    width: "150px",
    backgroundColor: "secondary.main",
    color: "secondary.contrastText",
    borderRadius: "14px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      color: "secondary.main",
    },
  },
};

export const ImageHeader = () => {
  const { data: movieList } = filmAPI.useGetTrendingMoviesQuery(1);
  const movie = movieList?.results[0] || ({} as Result);
  const { data: genresList } = filmAPI.useGetGenresListQuery();
  const genres = bindMovieGenres(movie, genresList?.genres || []);

  const { isFavorite, favoriteClickHandler } = useFavorite(movie);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ position: "relative", overflow: "hidden" }}
    >
      <SearchInput />
      <Box
        component="img"
        sx={styles.imgBox}
        alt="NICE image(believe me pls)"
        src={movie && `${IMAGE_BASE_URL}${movie.poster_path}`}
      />
      <Container
        disableGutters
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          mb: 4,
          ml: 4,
        }}
      >
        <Typography fontWeight="600" fontSize="48px">
          {movie?.original_title}
        </Typography>
        <Typography fontSize="14px" mb={2}>
          {movie?.release_date?.split("-")[0]} |{" "}
          {genres[0]?.name || "No genres"}
        </Typography>
        <Link to={`/movies/${movie?.id}`}>
          <Button variant="contained" sx={styles.button}>
            Watch Now
          </Button>
        </Link>
        <IconButton
          onClick={favoriteClickHandler}
          sx={{
            height: "50px",
            width: "50px",
            borderRadius: "14px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(5px)",
            ml: 2,
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.5)" },
          }}
        >
          {isFavorite ? (
            <FavoriteIcon color="secondary" />
          ) : (
            <FavoriteBorderIcon color="secondary" />
          )}
        </IconButton>
      </Container>
    </Container>
  );
};
