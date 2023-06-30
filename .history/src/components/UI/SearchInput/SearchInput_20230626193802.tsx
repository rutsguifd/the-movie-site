import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export function SearchInput() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  return (
    <>
      <IconButton onClick={handleSearchClick} color="inherit">
        <SearchIcon />
      </IconButton>
      {showSearch && (
        <TextField
          autoFocus
          variant="outlined"
          placeholder="Search"
          size="small"
          onBlur={handleSearchClose}
          fullWidth
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "250px",
          }}
        />
      )}
    </>
  );
}
