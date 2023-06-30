import { Container, Typography } from "@mui/material";
import { filmAPI } from "../../../store/services/FilmService";

export const GenresList = () => {
  const { data: genres } = filmAPI.useGetGenresListQuery();
  return (
    <>
      <Container>
        {genres?.genres.map((genre) => (
          <Typography sx={{ display: "inline-block" }} key={genre.id}>
            {genre.name}
          </Typography>
        ))}
      </Container>
    </>
  );
};
