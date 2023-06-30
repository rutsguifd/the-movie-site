import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchResultsPage from "../pages/SearchResultsPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search-results/:id" element={<SearchResultsPage />} />
    </Routes>
  );
};

export default AppRouter;
