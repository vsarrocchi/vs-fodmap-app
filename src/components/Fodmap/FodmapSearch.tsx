import * as React from "react";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SearchIcon from "@mui/icons-material/Search";
import StomachIcon from "../../assets/diarrhea.png";
import FODMAP_LIST from "../../fodmap-list";

const CSSTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#e26a82",
  },
  "& .MuiOutlinedInput-root": {
    paddingRight: "9px !important",
    "&:hover fieldset": {
      borderColor: "#e26a82",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#e26a82",
    },
  },
});

type FodmapSearchProps = {
  onSelectedFood: (text: string) => void;
};

const FodmapSearch: React.FC<FodmapSearchProps> = (props) => {
  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const searchInputValue = data.get("search") as string;
    props.onSelectedFood(searchInputValue);
  };

  const onhandleClick = () => {
    props.onSelectedFood("");
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "444px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Avatar src={StomachIcon} sx={{ m: 1 }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Search Fodmap
      </Typography>
      <Box
        component="form"
        onSubmit={onHandleSubmit}
        noValidate
        sx={{ mt: 1, width: "100%" }}
      >
        <Autocomplete
          freeSolo
          fullWidth
          id="free-solo-2-demo"
          options={FODMAP_LIST.map((option) => option.name)}
          renderInput={(params) => (
            <CSSTextField
              onClick={onhandleClick}
              {...params}
              margin="normal"
              fullWidth
              id="search"
              label="Search food"
              name="search"
              InputProps={{
                ...params.InputProps,
                type: "search",
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Button
          color="secondary"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default FodmapSearch;
