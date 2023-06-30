import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../utils/constants";
import { filmAPI } from "../../store/services/FilmService";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorite } from "../../hooks/useFavorite";
import { IMovieDetails } from "../../store/responses/SearchResponse";
import StarIcon from "@mui/icons-material/Star";

const styles = {
  imgBox: {
    width: { xs: "90vw", sm: "500px" },
    height: "400px",
    objectFit: "cover",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
  },
  button: {
    my: 2,
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
  iconButton: {
    height: "50px",
    width: "50px",
    borderRadius: "14px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(5px)",
    ml: 2,
    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.5)" },
  },
};

export const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie } = filmAPI.useGetMovieDetailsQuery(id || "");
  const { isFavorite, favoriteClickHandler } = useFavorite(
    movie || ({} as IMovieDetails)
  );
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{
        ml: { xs: 0, sm: 1.5 },
        mt: 8,
        alignItems: "center",
        maxWidth: "100vw",
      }}
    >
      <Box
        component="img"
        sx={styles.imgBox}
        alt="NICE image(believe me pls)"
        src={movie && `${IMAGE_BASE_URL}${movie.poster_path}`}
      />
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontWeight="600" fontSize="32px">
            {movie?.title}
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            fontWeight="500"
            fontSize="18px"
          >
            <StarIcon
              sx={{ height: "18px", width: "18px", mx: 1 }}
              color="secondary"
            />
            {movie?.vote_average}/10
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-around"
          sx={{ my: 2, maxWidth: "50%" }}
        >
          <Typography fontWeight="500" fontSize="18px">
            {movie?.release_date?.split("-")[0]}
          </Typography>
          <Typography fontWeight="500" fontSize="18px">
            {movie?.genres[0].name}
          </Typography>
          <Typography fontWeight="500" fontSize="18px">
            {movie &&
              Math.floor(movie.runtime / 60) +
                "h" +
                " " +
                (movie.runtime % 60) +
                "m"}
          </Typography>
        </Stack>
        <Typography fontSize="16px" sx={{ textAlign: "justify" }}>
          {movie?.overview}
        </Typography>
        <Button variant="contained" sx={styles.button}>
          Watch Now
        </Button>
        <IconButton onClick={favoriteClickHandler} sx={styles.iconButton}>
          {isFavorite ? (
            <FavoriteIcon color="secondary" />
          ) : (
            <FavoriteBorderIcon color="secondary" />
          )}
        </IconButton>
      </Container>
    </Stack>
  );
};
