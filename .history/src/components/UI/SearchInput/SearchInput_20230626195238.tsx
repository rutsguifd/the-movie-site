import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Collapse, Container, Fade, Slide } from "@mui/material";

export function SearchInput() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1,
        maxWidth: "40%",
      }}
    >
      {showSearch && (
        <Slide direction="left" in={showSearch}>
          <TextField
            autoFocus
            variant="outlined"
            placeholder="Search"
            size="small"
            onBlur={handleSearchClose}
            fullWidth
          />
        </Slide>
      )}
      {!showSearch && (
        <Slide direction="left" in={!showSearch}>
          <IconButton
            sx={{ ml: "auto" }}
            onClick={handleSearchClick}
            color="inherit"
          >
            <SearchIcon />
          </IconButton>
        </Slide>
      )}
    </Container>
  );
}
