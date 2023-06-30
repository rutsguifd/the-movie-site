import { Typography } from "@mui/material";
import { filmAPI } from "../../../store/services/FilmService";

export const GenresList = () => {
  const { data: genres } = filmAPI.useGetGenresListQuery();
  return (
    <>
      {genres?.genres.map((genre) => (
        <Typography key={genre.id}>{genre.name}</Typography>
      ))}
    </>
  );
};
