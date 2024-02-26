/** @format */

import { IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function TooltipExamples() {
  return (
    <div
      style={{
        backgroundColor: "#EBECF4",
        height: "100vh",
        padding: 10,
      }}>
      <Tooltip title='To close the button press it'>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default TooltipExamples;
