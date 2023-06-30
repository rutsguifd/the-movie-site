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
        minHeight: "300px",
        maxWidth: "250px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia
        sx={{ height: "100px", flex: "1 0 auto" }}
        image={`${IMAGE_BASE_URL}${data?.results[0].poster_path}`}
        title="xd"
      />
      <CardContent
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
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
