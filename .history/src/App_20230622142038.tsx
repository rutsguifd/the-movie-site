import { filmAPI } from "./store/services/FilmService";
import Model from "./Scene";
function App() {
  const { data } = filmAPI.useGetMovieBySearchQuery({
    searchQuery: "superman",
    page: 1,
  });
  console.log(data);

  return (
    <div>
      xd
      <Model />
    </div>
  );
}

export default App;
