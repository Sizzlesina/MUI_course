/** @format */

import {
  Avatar,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DraftIcon from "@mui/icons-material/Drafts";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import { useState } from "react";

function ListExamples() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div style={{ backgroundColor: "#EBECF4", height: "100vh", padding: 10 }}>
      <Box sx={{ maxWidth: 360, bgcolor: "white" }}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DraftIcon />
              </ListItemIcon>
              <ListItemText primary='Primary' secondary='Secondary' />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt='person'
                src='https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
              />
            </ListItemAvatar>
            <ListItemText primary='This is secondary text' />
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary='Inbox' />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={open} timeout={"auto"}>
            <List component={"div"} disablePadding>
              <ListItem>
                <ListItemText primary='Started' />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>
    </div>
  );
}

export default ListExamples;
