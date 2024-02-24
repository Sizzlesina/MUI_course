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

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submited", name, email, termsAccepted, gender);
    console.log("Clean the states");
    setName("");
    setEmail("");
    setTermsAccepted(false);
    setGender("");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit} style={{ width: "20%" }}>
        <Typography variant='h5'>Simple form</Typography>
        <Box m={4} ml={0}>
          <TextField
            type='text'
            fullWidth
            id='name'
            label='name'
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box m={4} ml={0}>
          <TextField
            type='email'
            fullWidth
            value={email}
            label='email'
            onChange={(e) => setEmail(e.target.value)}
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
  );
}

export default Form;
