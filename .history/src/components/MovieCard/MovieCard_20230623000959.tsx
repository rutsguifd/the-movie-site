import { filmAPI } from "../../store/services/FilmService";
import { IMAGE_BASE_URL } from "../../utils/constants";
import { Button } from "antd";

const MovieCard = () => {
  const { data } = filmAPI.useGetTrendingMoviesQuery();
  console.log(data);

  return (
    <>
      <Button type="primary">xdd</Button>
      <img src={`${IMAGE_BASE_URL}${data?.results[0].poster_path}`} alt="xdd" />
    </>
  );
};

export default MovieCard;
