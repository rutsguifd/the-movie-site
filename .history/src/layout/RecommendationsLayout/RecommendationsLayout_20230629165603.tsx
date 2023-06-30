import { Typography } from "@mui/material";
type Props = {
  children: string | JSX.Element | JSX.Element[];
};
export const RecommendationsLayout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Typography>rex</Typography>
    </>
  );
};
