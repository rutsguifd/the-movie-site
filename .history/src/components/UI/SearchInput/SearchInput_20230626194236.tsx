import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

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
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1,
        width: "250px",
      }}
    >
      {!showSearch && (
        <IconButton onClick={handleSearchClick} color="inherit">
          <SearchIcon />
        </IconButton>
      )}
      {showSearch && (
        <TextField
          autoFocus
          variant="outlined"
          placeholder="Search"
          size="small"
          onBlur={handleSearchClose}
          fullWidth
        />
      )}
    </Container>
  );
}
