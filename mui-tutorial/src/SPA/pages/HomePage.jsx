/** @format */

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

function HomePage() {
  const data =  [
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
  return (
    <Box>
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
      <Container>
        <Grid container>
          {data.map((item) => (
            <Grid item key={item.id}>
              <Card>
                <CardMedia
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
    </Box>
  );
}

export default HomePage;
