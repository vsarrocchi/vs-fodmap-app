import { Container, CssBaseline } from "@mui/material";
import { Fragment } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";

const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <ResponsiveAppBar />
      <Container component="main" maxWidth="md" sx={{ pt: 10 }}>
        <CssBaseline />
        {children}
      </Container>
    </Fragment>
  );
};

export default Layout;
