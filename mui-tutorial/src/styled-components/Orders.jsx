/** @format */

import {
  Box,
  CircularProgress,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import Title from "./Title";
import axios from "axios";

function Orders() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the user data from the jsonplaceholder fake api
  useEffect(function () {
    async function fetchData() {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setUsers(response.data);
          setIsLoading(false);
        });
    }
    fetchData();
  }, []);
  if (isLoading)
    return (
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}>
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  return (
    <Box>
      <Title data='Recent Orders' />
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align='right'>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell align='right'>{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default Orders;
