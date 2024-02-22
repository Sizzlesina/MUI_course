/** @format */

import { Box, Stack } from "@mui/material";

function LayoutResponsive() {
  return (
    <div>
      <Stack direction={{ xs: "row", lg: "column" }} alignItems={"center"}>
        <Box
          sx={{
            bgcolor: "primary.main",
            height: "400px",
            width: {
              xs: 300,
              sm: 500,
              md: 300,
              lg: 200,
              xl: 200,
            },
            m: 4,
          }}></Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            height: "400px",
            width: {
              xs: 300,
              sm: 500,
              md: 300,
              lg: 200,
              xl: 200,
            },
            m: 4,
          }}></Box>
      </Stack>
    </div>
  );
}

export default LayoutResponsive;
