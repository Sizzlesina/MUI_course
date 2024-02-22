/** @format */

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { useState } from "react";

function RadioGroupExamples() {
  const [data, setData] = useState("");
  return (
    <div>
      <Stack direction='row' spacing={2} margin={4} justifyContent='center'>
        <Radio
          value='a'
          onChange={(e) => setData(e.target.value)}
          checked={data === "a"}
        />
        <Radio
          value='b'
          onChange={(e) => setData(e.target.value)}
          checked={data === "b"}
        />
      </Stack>
      <Stack direction='row' spacing={2} margin={4} justifyContent='center'>
        {data}
      </Stack>
      <Stack direction='row' spacing={2} margin={4} justifyContent='center'>
        <FormControl>
          <FormLabel>Language</FormLabel>
          <RadioGroup
            row
            name='languages you speak'
            aria-labelledby='language_you_speak'
            value={data}
            onChange={(e) => setData(e.target.value)}>
            <FormControlLabel
              value='Spanish'
              control={<Radio size='large' color='secondary' />}
              label='Spanish'
            />
            <FormControlLabel
              value='Persian'
              control={<Radio />}
              label='Persian'
            />
            <FormControlLabel
              value='English'
              control={<Radio />}
              label='English'
            />
          </RadioGroup>
        </FormControl>
      </Stack>
    </div>
  );
}

export default RadioGroupExamples;
