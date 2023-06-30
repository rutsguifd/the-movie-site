import React from "react";
import MovieList from "../MovieList";
import { useParams } from "react-router-dom";
import { filmAPI } from "../../store/services/FilmService";
import { Container } from "@mui/material";

export const RecommendationsHeader = () => {
  const { id } = useParams();
  const [getRecommendations] = filmAPI.useLazyGetRecommendationsQuery();
  const getMovies = async (page: number) => {
    const res = await getRecommendations({
      id: parseInt(id || "1"),
      page,
    }).unwrap();
    return res;
  };
  return (
    <Container
      disableGutters
      sx={{
        mb: 2,
        display: "flex",
        flexDirection: "column",
        height: 700,
        //overflow: "hidden",
        overflowX: "scroll",
        // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
      }}
    >
      <MovieList getMovies={getMovies} captionText="Recommendations" />
    </Container>
  );
};
