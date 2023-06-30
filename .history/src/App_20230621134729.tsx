import { filmAPI } from "./store/services/FilmService";

function App() {
  const { data } = filmAPI.useGetMovieByQueryQuery({
    searchQuery: "superman",
    page: 1,
  });
  return <div>xd</div>;
}

export default App;
