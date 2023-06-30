import { useCallback, useEffect, useMemo, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import {
  Autocomplete,
  Box,
  Container,
  Grid,
  Slide,
  Typography,
  debounce,
} from "@mui/material";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { Result } from "../../../store/responses/SearchResponse";
import { filmAPI } from "../../../store/services/FilmService";
import { IMAGE_BASE_URL } from "../../../utils/constants";

export function SearchInput() {
  const [value, setValue] = useState<Result | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<readonly Result[]>([]);
  const [trigger] = filmAPI.useLazyGetMovieBySearchQuery();

  const onInputChange = useCallback(async () => {
    const res = await trigger({ searchQuery: inputValue, page: 1 }).unwrap();
    setOptions(res.results);
  }, [inputValue, trigger]);

  const debouncedSearch = useMemo(
    () => debounce(onInputChange, 500),
    [onInputChange]
  );

  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  useEffect(() => {
    debouncedSearch();
  }, [inputValue, debouncedSearch]);

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
        minWidth: "150px",
      }}
    >
      {showSearch && (
        <Autocomplete
          id="search-results"
          sx={{ width: 300 }}
          getOptionLabel={(option) =>
            typeof option === "string"
              ? option
              : option.name || option.title || "result"
          }
          filterOptions={(x) => x}
          options={options}
          autoComplete
          includeInputInList
          filterSelectedOptions
          value={value}
          noOptionsText="No Results"
          onChange={(event: any, newValue: Result | null) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
          }}
          renderInput={(params) => (
            <Slide direction="left" in={showSearch} mountOnEnter>
              <TextField
                {...params}
                onChange={(e) => setInputValue(e.target.value)}
                autoFocus
                variant="outlined"
                placeholder="Search"
                size="small"
                onBlur={handleSearchClose}
                fullWidth
                sx={{ "& fieldset": { border: "none" } }}
              />
            </Slide>
          )}
          renderOption={(props, option) => {
            return (
              <li {...props}>
                <Typography variant="body2" color="text.secondary">
                  {option.name}
                </Typography>
              </li>
            );
          }}
        />
      )}
      {!showSearch && (
        <Slide direction="left" in={!showSearch} mountOnEnter>
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
