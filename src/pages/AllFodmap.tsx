// import { useState, useEffect } from 'react';

import { Box, Typography } from "@mui/material";
import FodmapList from "../components/Fodmap/FodmapList";

const AllFodmap = () => {
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [loadedFodmapList, setLoadedFodmapList] = useState([]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch(
  //       'https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json'
  //     )
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         const meetups = [];

  //         for (const key in data) {
  //           const meetup = {
  //             id: key,
  //             ...data[key]
  //           };

  //           meetups.push(meetup);
  //         }

  //         setIsLoading(false);
  //         setLoadedFodmapList(FODMAP_LIST);
  //       });
  //   }, []);

  //   if (isLoading) {
  //     return (
  //       <section>
  //         <p>Loading...</p>
  //       </section>
  //     );
  //   }

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
