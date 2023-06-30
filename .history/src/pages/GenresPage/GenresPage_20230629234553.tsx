import GenresList from "../../components/MovieLists/GenresList";
import RecommendationsLayout from "../../layout/RecommendationsLayout";

export const GenresPage = () => {
  return (
    <RecommendationsLayout>
      <GenresList />
    </RecommendationsLayout>
  );
};
