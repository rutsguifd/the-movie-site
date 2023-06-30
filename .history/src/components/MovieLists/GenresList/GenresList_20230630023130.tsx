import { Container, Typography } from "@mui/material";
import { filmAPI } from "../../../store/services/FilmService";
import { useParams } from "react-router-dom";

export const GenresList = () => {
  const { data: genres } = filmAPI.useGetGenresListQuery();
  const { genreId } = useParams();
  return (
    <>
      <Container>
        {genres?.genres.map((genre) => (
          <Typography
            sx={{
              display: "inline-block",
              m: 2,
              fontWeight: (genreId || 12) == genre.id ? "600" : 300,
            }}
            key={genre.id}
          >
            {genre.name}
          </Typography>
        ))}
      </Container>
    </>
  );
};
