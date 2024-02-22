/** @format */

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
} from "@mui/material";
import { useState } from "react";

function CheckBoxExamples() {
  const [data, setData] = useState("a");
  const [checked, setChecked] = useState(true);
  const [language, setLanguage] = useState([]);

  const handleChange = (e) => {
    const index = language.indexOf(e.target.value);
    if (index === -1) {
      setLanguage([...language, e.target.value]);
    } else {
      setLanguage(language.filter((i) => i !== e.target.value));
    }
  };

  return (
    <div>
      <Stack direction='row' spacing={2} margin={4} justifyContent='center'>
        <FormControlLabel label='I accept the terms' control={<Checkbox />} />
      </Stack>
      <Stack direction='row' spacing={2} margin={4} justifyContent='center'>
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </Stack>
      <Stack direction='row' spacing={2} margin={4} justifyContent='center'>
        <FormControl>
          <FormLabel>Language</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label='Spanish'
              value='Spanish'
              control={
                <Checkbox
                  checked={language.includes("Spanish")}
                  onChange={handleChange}
                />
              }
            />
            <FormControlLabel
              label='English'
              value='English'
              control={
                <Checkbox
                  checked={language.includes("English")}
                  onChange={handleChange}
                />
              }
            />
            <FormControlLabel
              label='Persian'
              value='Persian'
              control={
                <Checkbox
                  checked={language.includes("Persian")}
                  onChange={handleChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Stack>
      <Stack direction='row' margin={4} spacing={2} justifyContent='center'>
        {language}
      </Stack>
    </div>
  );
}

export default CheckBoxExamples;
