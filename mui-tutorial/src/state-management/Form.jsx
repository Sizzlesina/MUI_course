/** @format */

import {
  Box,
  Button,
  Checkbox,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Header from "./Header";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [gender, setGender] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = {};
    if (!name) {
      error.name = "Name is Required";
    }
    if (!email) {
      error.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Invalid email format!";
    }
    if (Object.keys(error).length === 0) {
      console.log("form submited", name, email, termsAccepted, gender);
      console.log("Clean the states");
      setName("");
      setEmail("");
      setTermsAccepted(false);
      setGender("");
    } else {
      setError(error);
    }
  };

  return (
    <Box>
      {/* <Header /> */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit} style={{ width: "20%" }}>
          <Typography variant='h5'>Simple form</Typography>
          <Box m={4} ml={0}>
            <TextField
              fullWidth
              id='name'
              label='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!error.name}
              helperText={error.name}
            />
          </Box>
          <Box m={4} ml={0}>
            <TextField
              fullWidth
              value={email}
              label='email'
              onChange={(e) => setEmail(e.target.value)}
              error={!!error.email}
              helperText={error.email}
            />
          </Box>

          <Box>
            <Checkbox
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor='termsAccepted'>
              I accept the terms and condition.
            </label>
          </Box>
          <Box>
            <Typography variant='subtitled'>Gender</Typography>
            <Radio
              checked={gender === "male"}
              onChange={() => setGender("male")}
              value={"male"}
            />
            <label htmlFor='male'>Male</label>
            <Radio
              checked={gender === "female"}
              onChange={() => setGender("female")}
              value={"female"}
            />
            <label htmlFor='female'>Female</label>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button type='submit' variant='contained' color='primary'>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Form;
