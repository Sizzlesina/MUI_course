/** @format */

import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import DraftIcon from "@mui/icons-material/Drafts";
function DrawerExamples() {
  const [value, setValue] = useState(false);
  const toggleDrawer = () => {
    setValue((prevState) => !prevState);
  };
  return (
    <div
      style={{
        backgroundColor: "#EBECF4",
        height: "100vh",
        padding: 10,
      }}>
      <Button variant='contained' onClick={toggleDrawer}>
        Drawer
      </Button>
      <Drawer anchor='left' open={value} onClose={toggleDrawer}>
        <Box sx={{ width: 360 }}>
          Drawer Content
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <DraftIcon />
                </ListItemIcon>
                <ListItemText primary='Send' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default DrawerExamples;
