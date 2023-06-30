import { Typography } from "@mui/material";
import MainLayout from "../../layout";
import { useSearchParams } from "react-router-dom";

export const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  return (
    <MainLayout>
      <Typography>search result {title}</Typography>
    </MainLayout>
  );
};
