/** @format */

import {
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useState } from "react";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red[500],
    },
  },
});
function DarkMode() {
  const [theme, setTheme] = useState(true);
  return (
    <div>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <CssBaseline />
        <Typography>Hello World!</Typography>
        <Button
          variant='contained'
          disableRipple
          color='primary'
          onClick={() => setTheme((prevState) => !prevState)}>
          Submit!
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default DarkMode;
