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
import { useNavigate } from "react-router-dom";

export function SearchInput() {
  const [value, setValue] = useState<KeywordSearchItem | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<readonly KeywordSearchItem[]>([]);
  const [trigger] = filmAPI.useLazyGetMovieByKeywordQuery();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] =
    useState<KeywordSearchItem | null>(null);

  const onInputChange = useCallback(async () => {
    const res = await trigger(inputValue).unwrap();

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

  useEffect(() => {
    if (selectedOption) {
      navigate(`/search-results?title=${selectedOption.name}`);
    }
  }, [selectedOption, navigate]);

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
        maxWidth: { xs: "80%", sm: "35%" },
        minWidth: "150px",
        mr: { xs: 0, sm: 6 },
      }}
    >
      {showSearch && (
        <form>
          <Autocomplete
            id="search-results"
            sx={{ width: 300 }}
            getOptionLabel={(option) =>
              typeof option === "string" ? option : option.name
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
              setSelectedOption(newValue);
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
                  onSubmit={() =>
                    navigate(`/search-results?title=${inputValue}`)
                  }
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
        </form>
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
