import { Typography } from "@mui/material";
import MainLayout from "../../layout";
import { useParams } from "react-router-dom";

export const SearchResultsPage = () => {
  const { title } = useParams();
  return (
    <MainLayout>
      <Typography>search result {title}</Typography>
    </MainLayout>
  );
};
