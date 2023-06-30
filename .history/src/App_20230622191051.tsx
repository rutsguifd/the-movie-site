import { filmAPI } from "./store/services/FilmService";

function App() {
  const { data } = filmAPI.useGetTrendingMoviesQuery();
  console.log(data);
  console.log(data?.results[0].poster_path);

  return (
    <div>
      xd
      <img
        src={`${process.env.IMAGE_BASE_URL}${data?.results[0].poster_path}`}
        alt="xdd"
      />
    </div>
  );
}

export default App;
