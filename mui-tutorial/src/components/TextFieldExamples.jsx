/** @format */

import { Stack, TextField, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
function TextFieldExamples() {
  const [data, setData] = useState("");
  return (
    <div>
      <Stack direction='row' padding={2} justifyContent='center' margin={5}>
        <TextField
          variant='outlined'
          label='Outlined'
          color='secondary'
          size='small'
          required
        />
        <TextField variant='filled' label='Filled' />
        <TextField
          variant='standard'
          label='Standard'
          helperText='Helper text'
        />
      </Stack>
      <Stack direction='row' spacing={2} margin={4} justifyContent='center'>
        <TextField
          variant='outlined'
          label='With outlined TextField'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>kg</InputAdornment>
            ),
          }}
        />
        <TextField
          variant='outlined'
          label='With outlined TextField'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SendIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label='input'
          variant='outlined'
          value={data}
          onChange={(e) => setData(e.target.value)}
          helperText={!data ? "required" : "done"}
          error={!data}
        />
      </Stack>
    </div>
  );
}

export default TextFieldExamples;
