import { useState } from "react";
import { Alert, AlertTitle, Box, Container } from "@mui/material";
import FODMAP_LIST from "../fodmap-list";
import FodmapCard from "../components/Fodmap/FodmapCard";
import FodmapSearch from "../components/Fodmap/FodmapSearch";

const HomePage = () => {
  const [selectedFoodName, setSelectedFoodName] = useState<string>("");

  const filtered = FODMAP_LIST.filter((item) => item.name === selectedFoodName);

  const searchFoodHandler = (food: string) => {
    setSelectedFoodName(food);
  };

  let selectedFodmapContent;

  if (selectedFoodName !== "" && filtered.length === 0) {
    selectedFodmapContent = (
      <Alert severity="info">
        <AlertTitle>Alimento no encontrado</AlertTitle>
        Puede que el alimento que busca no este aun agregado a la lista de
        alimentos Fodmap —<strong> Search again!</strong>
      </Alert>
    );
  }

  if (selectedFoodName !== "" && filtered.length > 0) {
    selectedFodmapContent = filtered.map((fodmapItem) => (
      <FodmapCard key={fodmapItem.id} item={fodmapItem} />
    ));
  }

  return (
    <Container component="section">
      <FodmapSearch onSearchFood={searchFoodHandler} />
      <Box
        sx={{
          marginTop: 8,
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {selectedFodmapContent}
      </Box>
    </Container>
  );
};

export default HomePage;
