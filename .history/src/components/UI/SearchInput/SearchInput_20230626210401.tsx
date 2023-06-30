import { useEffect, useMemo, useState } from "react";
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
import parse from "autosuggest-highlight/parse";
import { ISearchResponse } from "../../../store/responses/SearchResponse";
import { filmAPI } from "../../../store/services/FilmService";

export function SearchInput() {
  const [value, setValue] = useState<ISearchResponse | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<ISearchResponse>();
  const [trigger] = filmAPI.useLazyGetMovieBySearchQuery();

  const onInputChange = () => {
    trigger(inputValue);
  };

  const fetch = useMemo(() => debounce(onInputChange, 300), []);

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
        minWidth: "150px",
      }}
    >
      {showSearch && (
        <Autocomplete
          id="google-map-demo"
          sx={{ width: 300 }}
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.description
          }
          filterOptions={(x) => x}
          options={options}
          autoComplete
          includeInputInList
          filterSelectedOptions
          value={value}
          noOptionsText="No locations"
          onChange={(event: any, newValue: PlaceType | null) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          renderInput={(params) => (
            <Slide direction="left" in={showSearch} mountOnEnter>
              <TextField
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
            const matches =
              option.structured_formatting.main_text_matched_substrings || [];

            const parts = parse(
              option.structured_formatting.main_text,
              matches.map((match: any) => [
                match.offset,
                match.offset + match.length,
              ])
            );

            return (
              <li {...props}>
                <Grid container alignItems="center">
                  <Grid item sx={{ display: "flex", width: 44 }}>
                    <LocationOnIcon sx={{ color: "text.secondary" }} />
                  </Grid>
                  <Grid
                    item
                    sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}
                  >
                    {parts.map((part, index) => (
                      <Box
                        key={index}
                        component="span"
                        sx={{
                          fontWeight: part.highlight ? "bold" : "regular",
                        }}
                      >
                        {part.text}
                      </Box>
                    ))}
                    <Typography variant="body2" color="text.secondary">
                      {option.structured_formatting.secondary_text}
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
