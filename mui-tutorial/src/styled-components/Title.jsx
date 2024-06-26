/** @format */

import { Typography } from "@mui/material";

function Title(props) {
  return (
    <Typography component={"h2"} variant='h6' color={"primary"} gutterBottom>
      {props.data}
    </Typography>
  );
}

export default Title;
