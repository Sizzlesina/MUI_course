/** @format */

import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
function HomePage() {
  const data = [
    {
      id: 1,
      name: "blog 1",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis ipsum ipsa hic reprehenderit culpa quod. Aperiam architecto tempore sit facere nulla! Distinctio libero eveniet fuga fugiat provident. Repudiandae, ad!",
    },
    {
      id: 2,
      name: "blog 2",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis ipsum ipsa hic reprehenderit culpa quod. Aperiam architecto tempore sit facere nulla! Distinctio libero eveniet fuga fugiat provident. Repudiandae, ad!",
    },
    {
      id: 3,
      name: "blog 3",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis ipsum ipsa hic reprehenderit culpa quod. Aperiam architecto tempore sit facere nulla! Distinctio libero eveniet fuga fugiat provident. Repudiandae, ad!",
    },
    {
      id: 4,
      name: "blog 4",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis ipsum ipsa hic reprehenderit culpa quod. Aperiam architecto tempore sit facere nulla! Distinctio libero eveniet fuga fugiat provident. Repudiandae, ad!",
    },
    {
      id: 5,
      name: "blog 5",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis ipsum ipsa hic reprehenderit culpa quod. Aperiam architecto tempore sit facere nulla! Distinctio libero eveniet fuga fugiat provident. Repudiandae, ad!",
    },
    {
      id: 6,
      name: "blog 6",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis ipsum ipsa hic reprehenderit culpa quod. Aperiam architecto tempore sit facere nulla! Distinctio libero eveniet fuga fugiat provident. Repudiandae, ad!",
    },
    {
      id: 7,
      name: "blog 7",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis ipsum ipsa hic reprehenderit culpa quod. Aperiam architecto tempore sit facere nulla! Distinctio libero eveniet fuga fugiat provident. Repudiandae, ad!",
    },
    {
      id: 8,
      name: "blog 8",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis ipsum ipsa hic reprehenderit culpa quod. Aperiam architecto tempore sit facere nulla! Distinctio libero eveniet fuga fugiat provident. Repudiandae, ad!",
    },
    {
      id: 9,
      name: "blog 9",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis ipsum ipsa hic reprehenderit culpa quod. Aperiam architecto tempore sit facere nulla! Distinctio libero eveniet fuga fugiat provident. Repudiandae, ad!",
    },
  ];
  const [anchor, setAnchor] = useState(null);
  const handleClose = (e) => {
    setAnchor(null);
  };
  const handleMenu = (e) => {
    setAnchor(e.currentTarget);
  };
  return (
    <Box>
      <Box>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
              My Blgo Website
            </Typography>
            <Box>
              <IconButton color='inherit' size='large' onClick={handleMenu}>
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchor}
                keepMounted
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchor)}
                onClose={handleClose}>
                <MenuItem onClose={handleClose}>Profile</MenuItem>
                <MenuItem onClose={handleClose}>My Account</MenuItem>
                <MenuItem onClose={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Container>
          <Typography variant='h2' align='center' color={"text.primary"}>
            My Blog Website
          </Typography>
          <Typography
            variant='h5'
            align='center'
            paragraph
            color={"text.secondary"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            consectetur, dignissimos iure optio molestiae vel, mollitia non
            consequatur minima laudantium quis nemo in itaque quo nesciunt
            fugiat voluptas repellat. Minima.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction={"row"}
            spacing={2}
            justifyContent={"center"}>
            <Button variant='contained'>Popular Blogs</Button>
            <Button variant='outlined'>New Blogs</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth={"md"}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  sx={{ pt: "56.25%" }}
                  component='div'
                  image='https://source.unsplash.com/random?wallpapers'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5'>
                    {item.name}
                  </Typography>
                  <Typography>{item.text}</Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>View</Button>
                  <Button size='small'>Share</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component={"footer"}>
        <Typography variant='h6' align='center' gutterBottom>
          Blog Footer
        </Typography>
        <Typography variant='body2' color={"text.secondary"} align='center'>
          Copyright @{" "}
          <Link color='inherit' href='#'>
            My Website
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
