import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { filmAPI } from "../../store/services/FilmService";
import { IMAGE_BASE_URL } from "../../utils/constants";

const MovieCard = () => {
  const { data } = filmAPI.useGetTrendingMoviesQuery();
  console.log(data);
  console.log(`${IMAGE_BASE_URL}${data?.results[0].poster_path}`);

  return (
    <Card
      sx={{
        position: "relative",
        height: "100%",
        minHeight: "300px",
        maxWidth: "250px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{
          height: "100%",
          paddingTop: "100%",
        }}
        image={`${IMAGE_BASE_URL}${data?.results[0].poster_path}`}
        title="xd"
      />
      <CardContent
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the background color and opacity as needed
          color: "white",
          padding: "10px",
        }}
      >
        <Typography variant="h5" component="h2">
          Text Overlay
        </Typography>
        <Typography variant="body2" component="p">
          Additional information
        </Typography>
      </CardContent>
      {/* <CardContent>
        <Typography variant="h5">text</Typography>
      </CardContent> */}
    </Card>
  );
};

export default MovieCard;
