/** @format */

import { Container, Typography } from "@mui/material";

function LayoutContainer() {
  return (
    <div>
      <Container maxWidth={"xl"} sx={{ bgcolor: "primary.main", mb: "10px" }}>
        <Typography color={"white"} fontSize={40} align='center'>
          Hello World!
        </Typography>
      </Container>
      <Container maxWidth={"lg"} sx={{ bgcolor: "primary.main", mb: "10px" }}>
        <Typography color={"white"} fontSize={40} align='center'>
          Hello World!{" "}
        </Typography>
      </Container>
      <Container maxWidth={"md"} sx={{ bgcolor: "primary.main", mb: "10px" }}>
        <Typography color={"white"} fontSize={40} align='center'>
          Hello World!{" "}
        </Typography>
      </Container>
      <Container maxWidth={"sm"} sx={{ bgcolor: "primary.main", mb: "10px" }}>
        <Typography color={"white"} fontSize={40} align='center'>
          Hello World!{" "}
        </Typography>
      </Container>
      <Container maxWidth={"xs"} sx={{ bgcolor: "primary.main", mb: "10px" }}>
        <Typography color={"white"} fontSize={40} align='center'>
          Hello World!{" "}
        </Typography>
      </Container>
      <Container fixed sx={{ bgcolor: "primary.main" }}>
        <Typography color={"white"} fontSize={40} align='center'>
          Hello World!{" "}
        </Typography>
      </Container>
    </div>
  );
}

export default LayoutContainer;
