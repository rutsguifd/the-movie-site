import { filmAPI } from "../../../store/services/FilmService";

export const TopRated = () => {
  const { data } = filmAPI.useGetTrendingMoviesQuery();
  console.log(data);
  return <div>TopRated</div>;
};
