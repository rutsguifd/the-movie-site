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

export const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie } = filmAPI.useGetMovieDetailsQuery(id || "");
  return (
    <Stack
      direction="row"
      sx={{
        ml: 1.5,
        mt: 8,
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        sx={{
          width: { xs: "90vh", sm: "500px" },
          height: "400px",
          objectFit: "cover",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.5)",
        }}
        alt="NICE image(believe me pls)"
        src={movie && `${IMAGE_BASE_URL}${movie.poster_path}`}
      />
      <Container>
        <Typography fontWeight="600" fontSize="32px">
          {movie?.title}
        </Typography>
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
        <Button
          variant="contained"
          sx={{
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
          }}
        >
          Watch Now
        </Button>
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
    </Stack>
  );
};
