import { useCallback, useEffect, useMemo, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import {
  Autocomplete,
  Container,
  Slide,
  Typography,
  debounce,
} from "@mui/material";
import { filmAPI } from "../../store/services/FilmService";
import { KeywordSearchItem } from "../../utils/models";
import { Link } from "react-router-dom";

export function SearchInput() {
  const [value, setValue] = useState<KeywordSearchItem | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<readonly KeywordSearchItem[]>([]);
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

  const navigateToSearchResults = (id: number) => {
    console.log(id);

    return {
      pathname: "/search-results",
      search: `?title-id=${id}`,
    };
  };

  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1,
        maxWidth: { xs: "80%", sm: "30%" },
        minWidth: "150px",
        mr: { xs: 0, sm: 6 },
      }}
    >
      {showSearch && (
        <Autocomplete
          id="search-results"
          sx={{ width: 300 }}
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.name || "Name"
          }
          filterOptions={(x) => x}
          options={options}
          autoComplete
          includeInputInList
          filterSelectedOptions
          value={value}
          noOptionsText="No Results"
          onChange={(event: any, newValue: KeywordSearchItem | null) => {
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
                sx={{
                  "& fieldset": { border: "none" },
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              />
            </Slide>
          )}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.id}>
                <Link
                  to={navigateToSearchResults(option.id)}
                  key={option.id}
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {option.name}
                  </Typography>
                </Link>
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
