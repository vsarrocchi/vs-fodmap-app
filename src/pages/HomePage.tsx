import { useState } from "react";
import { Alert, AlertTitle, Box, Container } from "@mui/material";
import FODMAP_LIST from "../fodmap-list";
import FodmapCard from "../components/Fodmap/FodmapCard";
import FodmapSearch from "../components/Fodmap/FodmapSearch";

const HomePage = () => {
  const [selectedFood, setSelectedFood] = useState("");

  const filtered =
    selectedFood !== ""
      ? FODMAP_LIST.filter((item) => item.name === selectedFood)
      : [];

  return (
    <Container component="section">
      <FodmapSearch onSelectedFood={setSelectedFood} />
      <Box
        sx={{
          marginTop: 8,
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {selectedFood !== "" &&
          filtered.length > 0 &&
          filtered.map((item) => <FodmapCard key={item.id} {...item} />)}
        {selectedFood !== "" && filtered.length === 0 && (
          <Alert severity="info">
            <AlertTitle>Alimento no encontrado</AlertTitle>
            Puede que el alimento que busca no este aun agregado a la lista de
            alimentos Fodmap —<strong> Search again!</strong>
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default HomePage;
