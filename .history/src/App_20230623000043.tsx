import { filmAPI } from "./store/services/FilmService";
import { IMAGE_BASE_URL } from "./utils/constants";

function App() {
  const { data } = filmAPI.useGetTrendingMoviesQuery();
  console.log(data);
  console.log(process.env);

  return (
    <div>
      xd
      <img src={`${IMAGE_BASE_URL}${data?.results[0].poster_path}`} alt="xdd" />
    </div>
  );
}

export default App;
