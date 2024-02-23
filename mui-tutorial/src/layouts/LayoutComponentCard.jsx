/** @format */

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function LayoutComponentCard() {
  return (
    <div>
      <Box p={4} bgcolor={"primary.light"}>
        <Card sx={{ width: 300 }}>
          <CardMedia
            component={"img"}
            height={150}
            image='https://images.unsplash.com/photo-1682686581484-a220483e6291?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
            alt='image'></CardMedia>
          <CardContent>
            <Typography variant='h4' gutterBottom>
              Header
            </Typography>
            <Typography>
              We can use the typography component for text fields
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small' variant='contained'>
              Read More
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default LayoutComponentCard;
