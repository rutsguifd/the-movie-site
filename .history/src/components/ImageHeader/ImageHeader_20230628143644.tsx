import { Box, Container } from "@mui/material";
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
        src={`${IMAGE_BASE_URL}${data?.results[0].poster_path}`}
      />
    </Container>
  );
};
