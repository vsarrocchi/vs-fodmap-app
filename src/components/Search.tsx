import {
  Autocomplete,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FODMAP_LIST from "../fodmap-list";

const Search = () => {
  return (
    <Autocomplete
      sx={{ margin: "20px 0" }}
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={FODMAP_LIST.map((option) => option.name)}
      renderInput={(params) => (
        <TextField
          color="secondary"
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        >
          <InputAdornment position="end">
            <IconButton type="submit" sx={{ p: "10px" }} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        </TextField>
      )}
    />
  );
};

export default Search;
