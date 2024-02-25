/** @format */

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
      <Typography variant='h5'>Sign in</Typography>
      <Box component={"form"} onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoFocus
        />
        <TextField
          margin='normal'
          fullWidth
          required
          id='password'
          label='Password'
          name='password'
          autoFocus
        />
        <FormControlLabel control={<Checkbox />} label='Remember me' />
        <Button
          type='submit'
          variant='contained'
          fullWidth
          sx={{ mt: 3, mb: 2 }}>
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href='#' variant='body2'>
              Forget Password?
            </Link>
          </Grid>
          <Grid item>
            <Link href='#' variant='body2'>
              Dont have an account ? Sign Up
            </Link>
          </Grid>
        </Grid>
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

export default LoginPage;
