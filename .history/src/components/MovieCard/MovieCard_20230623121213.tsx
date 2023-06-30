import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { filmAPI } from "../../store/services/FilmService";
import { IMAGE_BASE_URL } from "../../utils/constants";

const MovieCard = () => {
  const { data } = filmAPI.useGetTrendingMoviesQuery();
  console.log(data);
  console.log(data?.results[0].first_air_date);

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
        image={
          (data?.results.length &&
            `${IMAGE_BASE_URL}${data.results[1].poster_path}`) ||
          "image"
        }
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
          {data?.results.length
            ? data.results[0].name || data.results[0].title
            : "No Name"}
        </Typography>
        <Typography sx={{ ml: 2 }} variant="body2">
          {data?.results.length
            ? (
                data.results[0].release_date || data.results[0].first_air_date
              )?.split("-")[0]
            : "No Date"}{" "}
          | {}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
