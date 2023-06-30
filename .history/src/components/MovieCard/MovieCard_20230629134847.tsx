import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Result } from "../../store/responses/SearchResponse";
import { IMAGE_BASE_URL } from "../../utils/constants";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

interface IMovieCardProps {
  movie: Result;
  genres: { id: number; name: string }[];
}

const styles = {
  card: {
    position: "relative",
    minHeight: "300px",
    height: "100%",
    maxWidth: "250px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
  },
  cardMedia: {
    height: "100%",
    flex: "1 0 auto",
  },
  cardContent: {
    padding: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(5px)",
    color: "primary.contrastText",
  },
  movieTitle: {
    ml: 2,
    mt: 2,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxHeight: "3.6em",
  },
  movieDesc: { ml: 2 },
};

export const MovieCard: FC<IMovieCardProps> = ({ movie, genres }) => {
  const [favoriteMovie, setFavoriteMovie] = useLocalStorage<Result[]>(
    "favorite-movies",
    []
  );
  const [isExisting, setIsExisting] = useState<boolean>(
    favoriteMovie.find((mov) => mov.id === movie.id) ? true : false
  );
  const movieGenres = genres.filter((genre) =>
    movie.genre_ids.includes(genre.id)
  );

  const favoriteClickHandler = () => {
    const isExisting = favoriteMovie.find((mov) => mov.id === movie.id);
    if (!isExisting) {
      setFavoriteMovie((prev) => prev.concat(movie));
    }
  };

  console.log(favoriteMovie);

  return (
    <Card sx={styles.card}>
      <IconButton
        onClick={favoriteClickHandler}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "32px",
          width: "32px",
          borderRadius: "8.3px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(5px)",
          mr: 1.5,
          mt: 1.5,
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.5)" },
        }}
      >
        <FavoriteBorderIcon
          color="secondary"
          sx={{ height: "16px", width: "16px" }}
        />
      </IconButton>
      <CardMedia
        sx={styles.cardMedia}
        image={
          (movie.poster_path && `${IMAGE_BASE_URL}${movie.poster_path}`) ||
          "image"
        }
      />
      <Link to={`movies/${movie.id}`}>
        <CardContent sx={styles.cardContent}>
          <Typography sx={styles.movieTitle} variant="body1" fontWeight="600">
            {movie ? movie.name || movie.title : "No Name"}
          </Typography>
          <Typography sx={styles.movieDesc} variant="body2">
            {(movie &&
              (movie.release_date || movie.first_air_date)?.split("-")[0]) ||
              "No Date"}{" "}
            | {movieGenres[0]?.name || "No genres"}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};
