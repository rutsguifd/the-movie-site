import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { Result } from "../../store/responses/SearchResponse";
import { IMAGE_BASE_URL } from "../../utils/constants";

interface IMovieCardProps {
  movie: Result;
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

export const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.cardMedia}
        image={(movie && `${IMAGE_BASE_URL}${movie.poster_path}`) || "image"}
      />
      <CardContent sx={styles.cardContent}>
        <Typography sx={styles.movieTitle} variant="body1" fontWeight="600">
          {movie ? movie.name || movie.title : "No Name"}
        </Typography>
        <Typography sx={styles.movieDesc} variant="body2">
          {movie
            ? (movie.release_date || movie.first_air_date)?.split("-")[0] ||
              "No Date"
            : "No Date"}{" "}
          | {}
        </Typography>
      </CardContent>
    </Card>
  );
};
