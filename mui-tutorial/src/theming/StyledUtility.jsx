/** @format */

import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const CustomizedTypo = styled(Typography)`
  color: #000055;

  :hover {
    color: #ff3d00;
    background: #afafaf;
  }
`;
/*
@  We can write the customized component using the theme:
const CustomizedTypo = styled(Typography)((theme) => {
  color: theme.palette.primary.main;
});
*/

function StyledUtility() {
  return (
    <div>
      <CustomizedTypo variant='h1'>John Doe</CustomizedTypo>
    </div>
  );
}

export default StyledUtility;
