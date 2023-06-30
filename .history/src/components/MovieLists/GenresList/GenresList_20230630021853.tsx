import { Typography } from "@mui/material";
import { filmAPI } from "../../../store/services/FilmService";

export const GenresList = () => {
  const { data: genres } = filmAPI.useGetGenresListQuery();
  return (
    <>
      {genres?.genres.map((genre) => (
        <Typography>{genre.name}</Typography>
      ))}
    </>
  );
};
