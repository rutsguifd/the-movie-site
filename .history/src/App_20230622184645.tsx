import { filmAPI } from "./store/services/FilmService";

function App() {
  const { data } = filmAPI.useGetTrendingMoviesQuery();
  const [trigger] = filmAPI.useLazyGetMoviePosterQuery();
  console.log(data);
  console.log(data?.results[0].poster_path);

  return (
    <div>
      xd
      <button
        onClick={async () =>
          console.log(await trigger(data?.results[0].poster_path || "poster"))
        }
      >
        click
      </button>
      <img src={data?.results[0].poster_path} />
    </div>
  );
}

export default App;
