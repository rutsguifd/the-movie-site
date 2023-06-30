import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { Result } from "../../store/responses/SearchResponse";
import { IMAGE_BASE_URL } from "../../utils/constants";

interface IMovieCardProps {
  movie: Result;
}

export const MovieCard: FC<Result> = (movie) => {
  return (
    <Card
      sx={{
        position: "relative",
        minHeight: "300px",
        height: "100%",
        maxWidth: "250px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
      }}
    >
      <CardMedia
        sx={{
          height: "100%",
          flex: "1 0 auto",
        }}
        image={(movie && `${IMAGE_BASE_URL}${movie.poster_path}`) || "image"}
      />
      <CardContent
        sx={{
          padding: 0,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "25%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
          color: "white",
        }}
      >
        <Typography sx={{ ml: 2, mt: 2 }} variant="body1" fontWeight="600">
          {movie ? movie.name || movie.title : "No Name"}
        </Typography>
        <Typography sx={{ ml: 2 }} variant="body2">
          {movie
            ? (movie.release_date || movie.first_air_date)?.split("-")[0]
            : "No Date"}{" "}
          | {}
        </Typography>
      </CardContent>
    </Card>
  );
};
