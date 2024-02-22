/** @format */

import { Box, Grid } from "@mui/material";

function LayoutGrid() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} xl={2}>
          <Box
            sx={{
              border: "solid black",
              bgcolor: "primary.main",
              color: "white",
            }}>
            Component 1
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={2}>
          <Box
            sx={{
              border: "solid black",
              bgcolor: "primary.main",
              color: "white",
            }}>
            Component 2
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={2}>
          <Box
            sx={{
              border: "solid black",
              bgcolor: "primary.main",
              color: "white",
            }}>
            Component 3
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={2}>
          <Box
            sx={{
              border: "solid black",
              bgcolor: "primary.main",
              color: "white",
            }}>
            Component 4
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={2}>
          <Box
            sx={{
              border: "solid black",
              bgcolor: "primary.main",
              color: "white",
            }}>
            Component 5
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={2}>
          <Box
            sx={{
              border: "solid black",
              bgcolor: "primary.main",
              color: "white",
            }}>
            Component 6
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default LayoutGrid;
