import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import { muiTheme } from "./styles/stylesheet";
import "./App.css";
import AllFodmap from "./pages/AllFodmap";
import NotFound from "./pages/NotFound";
import FodmapDetail from "./pages/FodmapDetail";

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home-page" />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/all-fodmap" element={<AllFodmap />} />
          <Route path="/all-fodmap/:fodmapId" element={<FodmapDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
