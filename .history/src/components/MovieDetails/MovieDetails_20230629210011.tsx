import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { id } = useParams();
  return (
    <Stack>
      <Box
        component="img"
        sx={styles.imgBox}
        alt="NICE image(believe me pls)"
        src={movie && `${IMAGE_BASE_URL}${movie.poster_path}`}
      />
    </Stack>
  );
};
