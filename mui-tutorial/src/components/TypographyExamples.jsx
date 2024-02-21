/** @format */

import { Typography } from "@mui/material";

function TypographyExamples() {
  return (
    <div>
      {/* Typography  */}
      <Typography variant='h1'>Hello world</Typography>
      <Typography variant='h2'>Hello world</Typography>
      <Typography variant='h3'>Hello world</Typography>
      <Typography variant='h4'>Hello world</Typography>
      <Typography variant='h5'>Hello world</Typography>
      <Typography variant='h6'>Hello world</Typography>
      <Typography variant='body1' color='error' component='h2'>
        Hello world
      </Typography>
      <Typography variant='body2' gutterBottom>
        Hello world
      </Typography>
      <Typography variant='caption'>Hello world</Typography>
    </div>
  );
}

export default TypographyExamples;
