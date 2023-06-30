import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { IMAGE_BASE_URL } from "../../utils/constants";
import { filmAPI } from "../../store/services/FilmService";
import SearchInput from "../SearchInput";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

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
  const movie = data?.results[0];
  console.log(movie);
  const { data: genres } = filmAPI.useGetGenresListQuery();
  const movieGenres = genres?.genres.filter((genre) =>
    data?.results[0].genre_ids.includes(genre.id)
  );
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
        src={data && `${IMAGE_BASE_URL}${data?.results[0].poster_path}`}
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
          {data?.results[0].original_title}
        </Typography>
        <Typography fontSize="14px" mb={2}>
          {data?.results[0].release_date?.split("-")[0]} |{" "}
          {movieGenres?.[0]?.name || "No genres"}
        </Typography>
        <Link to={`/movies/${data?.results[0].id}`}>
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
        </Link>
        <IconButton
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
          <FavoriteBorderIcon color="secondary" />
        </IconButton>
      </Container>
    </Container>
  );
};
