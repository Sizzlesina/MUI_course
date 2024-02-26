/** @format */

import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

function NavigationExamples() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        backgroundColor: "#EBECF4",
        height: "100vh",
        padding: 10,
      }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab value={"1"} label='Page 1' />
          <Tab value={"2"} label='Page 2' />
          <Tab value={"3"} label='Page 3' />
        </Tabs>
      </Box>
      {value === "1" ? (
        <Box sx={{ backgroundColor: "white", wdith: "100%", height: "100vh" }}>
          First Page
        </Box>
      ) : value === "2" ? (
        <Box
          sx={{
            backgroundColor: "secondary.main",
            wdith: "100%",
            height: "100vh",
          }}>
          Second Page
        </Box>
      ) : (
        <Box sx={{ backgroundColor: "white", wdith: "100%", height: "100vh" }}>
          Third Page
        </Box>
      )}
    </div>
  );
}

export default NavigationExamples;
