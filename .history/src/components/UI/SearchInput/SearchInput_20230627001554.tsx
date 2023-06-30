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
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
    () => debounce(onInputChange, 200),
    [onInputChange]
  );

  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  console.log(options);

  useEffect(() => {
    debouncedSearch();
  }, [inputValue]);

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
          //   getOptionLabel={(option) =>
          //     typeof option === "string" ? option : option.name || "result"
          //   }
          filterOptions={(x) => x}
          options={options}
          autoComplete
          includeInputInList
          filterSelectedOptions
          //value={value?.adult}
          noOptionsText="No Results"
          onChange={(event: any, newValue: Result | null) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
          }}
          //   onInputChange={(event, newInputValue) => {
          //     setInputValue(newInputValue);
          //   }}
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
                <Grid container alignItems="center">
                  <Grid item sx={{ display: "flex", width: 44 }}>
                    {option && (
                      <Box
                        component="img"
                        src={`${IMAGE_BASE_URL}${value?.poster_path}`}
                      />
                    )}
                  </Grid>
                  <Grid
                    item
                    sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}
                  >
                    {options.map((part, index) => (
                      <Box
                        key={index}
                        component="span"
                        sx={{
                          fontWeight: part.original_name ? "bold" : "regular",
                        }}
                      >
                        {part.release_date}
                      </Box>
                    ))}
                    <Typography variant="body2" color="text.secondary">
                      {option.id}
                    </Typography>
                  </Grid>
                </Grid>
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
