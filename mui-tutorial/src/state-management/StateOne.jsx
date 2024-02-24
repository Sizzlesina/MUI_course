/** @format */

import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Header from "./Header";

function StateOne() {
  const [num, setNum] = useState(0);
  const substraction = () => {
    setNum((prevNumb) => prevNumb - 1);
  };
  const addition = () => {
    setNum((prevNumb) => prevNumb + 1);
  };
  return (
    <Box>
      <Header />
      <Stack
        direction={"row"}
        sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => substraction()}
          sx={{ fontSize: "100px", color: "secondary" }}>
          -
        </Button>
        <Box
          p={8}
          height={150}
          width={150}
          bgcolor={"blue"}
          sx={{
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
          }}>
          <Typography color={"white"} fontSize={140}>
            {num}
          </Typography>
        </Box>
        <Button
          onClick={() => addition()}
          sx={{ fontSize: "100px", color: "secondary" }}>
          +
        </Button>
      </Stack>
    </Box>
  );
}

export default StateOne;
