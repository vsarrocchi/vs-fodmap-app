import * as React from "react";
import { useState } from "react";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SearchIcon from "@mui/icons-material/Search";
import StomachIcon from "../assets/diarrhea.png";
import FODMAP_LIST from "../fodmap-list";
import FodmapCard from "../components/Fodmap/FodmapCard";

const CSSTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#e26a82",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#e26a82",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#e26a82",
    },
  },
});

const HomePage = () => {
  const [selectedFood, setSelectedFood] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const searchInputValue: any = data.get("search");
    setSelectedFood(searchInputValue);
  };

  const filtered =
    selectedFood !== ""
      ? FODMAP_LIST.filter((item) => item.name === selectedFood)
      : [];

  return (
    <Container component="section" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          <Autocomplete
            freeSolo
            fullWidth
            id="free-solo-2-demo"
            disableClearable
            options={FODMAP_LIST.map((option) => option.name)}
            renderInput={(params) => (
              <CSSTextField
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
      {filtered.map((item) => (
        <FodmapCard key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default HomePage;
