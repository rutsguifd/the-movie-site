import { filmAPI } from "./store/services/FilmService";

function App() {
  const { data } = filmAPI.useGetMovieBySearchQuery({
    searchQuery: "superman",
    page: 1,
  });
  const [trigger] = filmAPI.useLazyGetMoviePosterQuery();
  console.log(data);
  console.log(trigger(data?.results[0].poster_path || "poster"));

  return <div>xd</div>;
}

export default App;
