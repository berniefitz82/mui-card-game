import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


function generateTablesData(numRows) {
  const data = [];
  for (let i = 0; i < numRows; i++) {
    data.push({
      id: 21,
      name: "Some table",
      players: "4/8",
      time: "3h24m",
    });
  }
  return data;
}

function LiveGamesTable() {
  const data = generateTablesData(5);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Players</TableCell>
            <TableCell>Time (mins)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.players}</TableCell>
              <TableCell>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LiveGamesTable;