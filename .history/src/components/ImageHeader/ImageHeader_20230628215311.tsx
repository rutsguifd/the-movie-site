import { Box, Button, Container, Typography } from "@mui/material";
import { IMAGE_BASE_URL } from "../../utils/constants";
import { filmAPI } from "../../store/services/FilmService";
import SearchInput from "../SearchInput";

const styles = {
  imgBox: {
    width: "100%",
    height: "40vh",
    objectFit: "cover",
    filter: "blur(5px)",
  },
};

export const ImageHeader = () => {
  const { data } = filmAPI.useGetTrendingMoviesQuery(1);
  return (
    <Container disableGutters maxWidth={false} sx={{ position: "relative" }}>
      <SearchInput />
      <Box
        component="img"
        sx={styles.imgBox}
        alt="NICE image(believe me pls)"
        src={data && `${IMAGE_BASE_URL}${data?.results[0].poster_path}`}
      />
      <Container
        disableGutters
        sx={{
          position: "absolute",
          maxWidth: "40%",
          bottom: 0,
          left: 0,
          mb: 4,
          ml: 4,
        }}
      >
        <Typography fontWeight="600" fontSize="48">
            {data?.results[0].original_title ||}
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
          }}
        >
          Watch Now
        </Button>
      </Container>
    </Container>
  );
};
