import React from "react";
import MovieList from "../MovieList";
import { useParams } from "react-router-dom";
import { filmAPI } from "../../store/services/FilmService";
import { Container } from "@mui/material";

export const RecommendationsHeader = () => {
  const { id } = useParams();
  const [getRecommendations, { currentData }] =
    filmAPI.useLazyGetRecommendationsQuery();
  const getMovies = async (page: number) => {
    const res = await getRecommendations({
      id: parseInt(id || "1"),
      page,
    }).unwrap();
    return res;
  };
  console.log(currentData);

  return (
    <Container>
      <MovieList
        getMovies={getMovies}
        captionText="Recommendations"
        isHorizontal
        sm={4}
      />
    </Container>
  );
};
