/** @format */
import Title from "./Title";
import { Box, Link, Typography } from "@mui/material";

function Deposit() {
  return (
    <Box>
      <Title data='Recent Deposits' />
      <Typography component={"p"} variant='h4'>
        $3232.04
      </Typography>
      <Typography color={"text.primary"} sx={{ flex: 1 }}>
        on 06 June , 2023
      </Typography>
      <Box>
        <Link color={"primary"}>View Balance</Link>
      </Box>
    </Box>
  );
}

export default Deposit;
