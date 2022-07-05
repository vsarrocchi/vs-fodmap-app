import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import { muiTheme } from "./styles/stylesheet";
import "./App.css";
import AllFodmap from "./pages/AllFodmap";
import NotFound from "./pages/NotFound";

function App() {
  // const [selectedOption, setSelectedOption] = useState("");

  // const handleSelectedOption = (event: any) => {
  //   setSelectedOption(event.target.value);
  // };

  // const filtered = selectedOption !== "" ? FODMAP_LIST.filter((item) => item.name === selectedOption) : FODMAP_LIST;

  return (
    <ThemeProvider theme={muiTheme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home-page" />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route
            path="/all-fodmap"
            element={<AllFodmap />}
          />
          {/* <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn--flat" to={`comments`}>
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path={`comments`} element={<Comments />} />
          </Route>*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
