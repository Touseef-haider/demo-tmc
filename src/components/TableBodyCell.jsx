import { TableCell } from "@mui/material";

export default function TableBodyCell({ col, index, colNo, activeColNo }) {
  return (
    <TableCell
      align="center"
      sx={
        colNo == activeColNo
          ? {
              bgcolor: "#167c38",
              color: "white",
            }
          : {}
      }
    >
      {col ? (col == "?" ? "?" : col[index] && col[index].index) : ""}
    </TableCell>
  );
}
