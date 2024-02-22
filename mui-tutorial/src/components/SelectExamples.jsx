/** @format */

import { MenuItem, Select, Stack } from "@mui/material";
import { useState } from "react";

function SelectExamples() {
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setData(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <Stack
        direction='row'
        spacing={2}
        margin={4}
        justifyContent='center'
        width='200px'>
        <Select
          label='language'
          value={data}
          onChange={handleChange}
          fullWidth
          multiple>
          <MenuItem value='Spanish'>Spanish</MenuItem>
          <MenuItem value='English'>English</MenuItem>
          <MenuItem value='Persian'>Persian</MenuItem>
        </Select>
      </Stack>
      <Stack direction='row' spacing={2} margin={4} justifyContent='center'>
        {data}
      </Stack>
    </div>
  );
}

export default SelectExamples;
