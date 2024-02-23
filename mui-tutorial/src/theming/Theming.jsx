/** @format */

import { Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    color1: {
      main: green[500],
      preferance: green[100],
    },
  },
  typography: {
    // fontSize: 30,
    h1: {
      // fontSize: "1rem",
      fontSize: "6rem", // main value
      // fontFamily: "sans-serif",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: "contained",
        color: "color1",
      },
    },
  },
});

function Theming() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant='h1' color={"primary"}>
          Hello World!
        </Typography>
        <Typography variant='h1' color={"color1.preferance"}>
          Hello World!
        </Typography>
        <Button>Submit</Button>
      </div>
    </ThemeProvider>
  );
}

export default Theming;
