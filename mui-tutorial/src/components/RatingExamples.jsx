/** @format */

import { Icon, Rating, Stack } from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

function RatingExamples() {
  const [data, setData] = useState(2);
  return (
    <div>
      <Stack direction='row' spacing={4} margin={2} justifyContent='center'>
        <Rating
          value={data}
          precision={0.5}
          icon={<SendIcon color='secondary' />}
          emptyIcon={<SendIcon />}
          onChange={(event, newValue) => {
            setData(newValue);
          }}
        />
        <Rating value={data} disabled />
      </Stack>
      <Stack direction='row' spacing={4} margin={2} justifyContent='center'>
        {data}
      </Stack>
    </div>
  );
}

export default RatingExamples;
