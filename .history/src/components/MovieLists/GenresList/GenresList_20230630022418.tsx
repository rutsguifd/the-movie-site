import { Container, Typography } from "@mui/material";
import { filmAPI } from "../../../store/services/FilmService";

export const GenresList = () => {
  const { data: genres } = filmAPI.useGetGenresListQuery();
  return (
    <>
      <Container sx={{ display: "flex" }}>
        {genres?.genres.map((genre) => (
          <Typography
            sx={{ display: "inline-block", m: 2, flex: "0 0 auto" }}
            key={genre.id}
          >
            {genre.name}
          </Typography>
        ))}
      </Container>
    </>
  );
};
