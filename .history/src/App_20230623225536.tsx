import TopRated from "./components/MovieLists/TopRated";
import PermanentDrawerLeft from "./layout/MainLayout";

function App() {
  return (
    <div>
      <PermanentDrawerLeft children={<TopRated />}></PermanentDrawerLeft>
    </div>
  );
}

export default App;
