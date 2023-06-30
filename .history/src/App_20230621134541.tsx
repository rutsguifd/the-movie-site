import { filmAPI } from "./store/services/FilmService";

function App() {
  const { data } = filmAPI.useGetMovieByQueryQuery("superman");
  return <div>xd</div>;
}

export default App;
