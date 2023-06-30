import RecommendationsLayout from "../../layout/RecommendationsLayout";
import MovieDetails from "../../components/MovieDetails";

export const MovieDetailsPage = () => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <RecommendationsLayout>
        <MovieDetails />
      </RecommendationsLayout>
    </div>
  );
};
