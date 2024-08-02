import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function HistoryTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Tirada</TableCell>
          <TableCell>Caras</TableCell>
          <TableCell>Resultado</TableCell>
          <TableCell>Resultados individuales </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}
