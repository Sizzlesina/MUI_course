/** @format */

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const data = [
  createData("Frozen Yoghurt", 150, 6.0, 24, 4.0),
  createData("Ice Cream Sandwich", 237, 9.0, 37, 4.3),
  createData("Eclar", 262, 3.7, 67, 4.0),
  createData("Gingerbread", 356, 16.0, 24, 7.9),
  createData("Cupcake", 464, 4.4, 65, 12.3),
];
function TableExamples() {
  return (
    <div style={{ backgroundColor: "#EBECF4", height: "100vh", padding: 10 }}>
      <TableContainer component={Paper} sx={{ margin: 5, width: 1200 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Desert</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align='right'>
                Calories
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align='right'>
                Fat
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align='right'>
                Carbs
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align='right'>
                Protein
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell align='right'>{item.calories}</TableCell>
                <TableCell align='right'>{item.fat}</TableCell>
                <TableCell align='right'>{item.carbs}</TableCell>
                <TableCell align='right'>{item.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableExamples;
