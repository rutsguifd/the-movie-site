export const useFavorite = () => {
  const [favoriteMovie, setFavoriteMovie] = useLocalStorage<Result[]>(
    "favorite-movies",
    []
  );
  const [isFavorite, setIsFavorite] = useState<boolean>();
};
