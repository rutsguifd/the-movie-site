import { filmAPI } from "../../store/services/FilmService";
import { IMAGE_BASE_URL } from "../../utils/constants";

const MovieCard = () => {
  const { data } = filmAPI.useGetTrendingMoviesQuery();
  console.log(data);

  return (
    <>
      <img src={`${IMAGE_BASE_URL}${data?.results[0].poster_path}`} alt="xdd" />
    </>
  );
};

export default MovieCard;
