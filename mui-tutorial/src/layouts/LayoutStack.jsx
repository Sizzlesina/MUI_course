/** @format */

import { Button, Divider, Stack } from "@mui/material";

function LayoutStack() {
  return (
    <div>
      <Stack
        spacing={2}
        direction={"column"}
        sx={{ p: "20px" }}
        divider={<Divider orientation='horizontal' flexItem />}>
        <Button variant='contained'>Start</Button>
        <Button variant='contained'>Stop</Button>
      </Stack>
    </div>
  );
}

export default LayoutStack;
