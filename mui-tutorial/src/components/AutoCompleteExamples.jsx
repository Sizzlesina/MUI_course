/** @format */

import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

function AutoCompleteExamples() {
  const [data, setData] = useState(null);
  const lang = ["Spanish", "English", "Persian"];

  return (
    <div>
      <Stack
        direction='row'
        spacing={4}
        margin={2}
        justifyContent='center'
        width='200px'>
        <Autocomplete
          fullWidth
          options={lang}
          value={data}
          freeSolo
          onChange={(event, newValue) => setData(newValue)}
          renderInput={(params) => <TextField {...params} label='language' />}
        />
      </Stack>
      <Stack direction={"row"} spacing={4} margin={2} justifyContent={"center"}>
        {data}
      </Stack>
    </div>
  );
}

export default AutoCompleteExamples;
