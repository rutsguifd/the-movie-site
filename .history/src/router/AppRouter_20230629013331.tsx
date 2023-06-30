import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchResultsPage from "../pages/SearchResultsPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search-results" element={<SearchResultsPage />} />
      <Route path="/movies/:id" element={<MovieDetailsPage />} />
    </Routes>
  );
};

export default AppRouter;
