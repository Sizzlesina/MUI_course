/** @format */

import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function LayoutAppbar() {
  return (
    <div>
      <AppBar position='static' color='secondary'>
        <Toolbar sx={{ color: "secondary.light" }}>
          <IconButton size='large' edge='start' color='inherit'>
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>Contact</Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default LayoutAppbar;
