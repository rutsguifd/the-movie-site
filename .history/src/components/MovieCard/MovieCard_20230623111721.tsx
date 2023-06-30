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
        image={`${IMAGE_BASE_URL}${data?.results[0].poster_path}`}
        title="xd"
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
        <Typography variant="body1" component="h2">
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
