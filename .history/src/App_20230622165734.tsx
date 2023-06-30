import { filmAPI } from "./store/services/FilmService";

function App() {
  const { data } = filmAPI.useGetMovieBySearchQuery({
    searchQuery: "superman",
    page: 1,
  });
  const [trigger] = filmAPI.useLazyGetMoviePosterQuery();
  console.log(data);

  return (
    <div>
      xd
      <button onClick={() => trigger(data?.results[0].poster_path || "poster")}>
        click
      </button>
    </div>
  );
}

export default App;
