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
    <Container disableGutters>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "#bdbdbd #f5f5f5",
        }}
      >
        <MovieList getMovies={getMovies} captionText="Recommendations" />
      </div>
    </Container>
  );
};
