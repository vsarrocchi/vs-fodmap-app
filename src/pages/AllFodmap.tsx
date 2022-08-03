import { Box, Typography } from "@mui/material";
import FodmapList from "../components/Fodmap/FodmapList";

const AllFodmap = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
      }}
    >
      <Typography component="h1" variant="h4" gutterBottom>
        All Fodmap
      </Typography>
      <FodmapList />
    </Box>
  );
};

export default AllFodmap;
