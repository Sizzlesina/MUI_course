/** @format */

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
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
    <Grid container component={"main"} sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1708724195876-1156245fce21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[80],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item component={Paper} square elevation={6} xs={12} md={5} sm={8}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography variant='h5' color={"secondary.main"}>
            Sign in
          </Typography>
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}>
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
      </Grid>
    </Grid>
  );
}

export default LoginPage;
