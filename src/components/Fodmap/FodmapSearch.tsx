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

const FodmapSearch: React.FC<{ onSearchFood: (text: string) => void }> = (
  props
) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const searchInputValue = data.get("search") as string;
    props.onSearchFood(searchInputValue);
  };

  const clickHandler = () => {
    props.onSearchFood("");
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar src={StomachIcon} sx={{ m: 1 }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" align="center">
        FODMAP
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center">
        <b>F</b>ermentable <b>O</b>ligosaccharides, <b>D</b>isaccharides,{" "}
        <b>M</b>onosaccharides <b>a</b>nd <b>P</b>olyols.
      </Typography>
      <Box
        component="form"
        onSubmit={submitHandler}
        noValidate
        sx={{
          mt: 1,
          width: "100%",
          maxWidth: "444px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Autocomplete
          freeSolo
          fullWidth
          id="free-solo-2-demo"
          options={FODMAP_LIST.map((option) => option.name)}
          renderInput={(params) => (
            <CSSTextField
              onClick={clickHandler}
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
