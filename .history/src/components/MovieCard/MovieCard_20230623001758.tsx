import { Card, CardMedia } from "@mui/material";
import { filmAPI } from "../../store/services/FilmService";
import { IMAGE_BASE_URL } from "../../utils/constants";

const MovieCard = () => {
  const { data } = filmAPI.useGetTrendingMoviesQuery();
  console.log(data);

  return (
    <Card>
      <CardMedia
        src={`${IMAGE_BASE_URL}${data?.results[0].poster_path}`}
      ></CardMedia>
    </Card>
  );
};

export default MovieCard;
