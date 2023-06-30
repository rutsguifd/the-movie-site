import { filmAPI } from "./store/services/FilmService";

function App() {
  const { data } = filmAPI.useGetMovieBySearchQuery({
    searchQuery: "superman",
    page: 1,
  });
  console.log(data);

  return <div>xd</div>;
}

export default App;
