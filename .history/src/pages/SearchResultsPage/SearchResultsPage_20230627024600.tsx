import { Typography } from "@mui/material";
import MainLayout from "../../layout";
import { useParams } from "react-router-dom";

export const SearchResultsPage = () => {
  const { id } = useParams();
  return (
    <MainLayout>
      <Typography>search result {id}</Typography>
    </MainLayout>
  );
};
