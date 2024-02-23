/** @format */

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function LayoutAccordion() {
  return (
    <div>
      <Box p={4} bgcolor={"primary.light"}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We can use Typography component inside the Accordion component{" "}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We can use Typography component inside the Accordion component{" "}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion disabled>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We can use Typography component inside the Accordion component{" "}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}

export default LayoutAccordion;
