/** @format */

import { Box } from "@mui/material";

function LayoutBox() {
  return (
    <div>
      <Box component={"span"}>Hello World!</Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": { backgroundColor: "secondary.main" },
        }}>
        Hello World!
      </Box>
      <Box bgcolor={"secondary.main"} m={2}>
        Hello World!
      </Box>
    </div>
  );
}

export default LayoutBox;
