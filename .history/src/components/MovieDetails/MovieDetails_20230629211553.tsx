import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../utils/constants";
import { filmAPI } from "../../store/services/FilmService";

export const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie } = filmAPI.useGetMovieDetailsQuery(id || "");
  return (
    <Stack>
      <Box
        component="img"
        sx={{
          width: { xs: "90vh", sm: "550px" },
          height: "450px",
          objectFit: "cover",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.5)",
        }}
        alt="NICE image(believe me pls)"
        src={movie && `${IMAGE_BASE_URL}${movie.poster_path}`}
      />
    </Stack>
  );
};
