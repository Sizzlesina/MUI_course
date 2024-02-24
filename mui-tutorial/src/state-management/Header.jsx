/** @format */

import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>My Simple Website</Typography>
        <Button component={Link} to='/' sx={{ color: "white" }}>
          Form
        </Button>
        <Button component={Link} to='/state-one' sx={{ color: "white" }}>
          State One
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
