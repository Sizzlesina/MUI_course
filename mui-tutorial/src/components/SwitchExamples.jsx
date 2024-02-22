/** @format */

import { FormControlLabel, Stack, Switch } from "@mui/material";
import { useState } from "react";

function SwitchExamples() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <Stack direction='row' margin={4} spacing={2} justifyContent='center'>
        <FormControlLabel
          label='Dark Mode'
          control={
            <Switch
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
          }
        />
      </Stack>
      <Stack direction='row' spacing={4} margin={2} justifyContent='center'>
        {checked ? "True" : "False"}
      </Stack>
    </div>
  );
}

export default SwitchExamples;
