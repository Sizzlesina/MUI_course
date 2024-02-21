/** @format */

import { Button, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
function Buttons() {
  return (
    <div>
      <Button variant='text' href='mui.com' color='primary' size='small'>
        Click
      </Button>
      <Button variant='contained'>Click</Button>
      <Button variant='outlined'>Click</Button>
      <Stack direction='row' spacing={2} justifyContent='center'>
        <Button variant='contained' color='success' endIcon={<SendIcon />}>
          Send
        </Button>
        <Button
          variant='outlined'
          size='large'
          color='error'
          startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <IconButton
          aria-label='delete'
          color='error'
          disableElevation
          disableRipple
          onClick={() => alert("Item got deleted!")}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </div>
  );
}

export default Buttons;
