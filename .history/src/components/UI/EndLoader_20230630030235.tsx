import { Typography } from "@mui/material";

const EndLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography alignSelf="center" fontSize="32px">
        That's All
      </Typography>
    </div>
  );
};

export default EndLoader;
