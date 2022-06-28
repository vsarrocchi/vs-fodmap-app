import { Container, Paper } from "@mui/material";
import "./App.css";
import FodmapList from "./components/FodmapList";
import Search from "./components/Search";
import FODMAP_LIST from "./fodmap-list";

function App() {
  return (
    <Container maxWidth="md">
      <Paper elevation={0}>
        <Search />
      </Paper>
      <FodmapList items={FODMAP_LIST} />
    </Container>
  );
}

export default App;
