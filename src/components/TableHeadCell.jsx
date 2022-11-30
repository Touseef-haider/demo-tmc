import { TableCell, Button } from "@mui/material";

export default function TableHeadCell({
  col,
  colNo,
  setActiveCol,
  setActiveColNo,
}) {
  const handleClick = (column) => {
    if (column) {
      if (Array.isArray(column)) {
        setActiveCol(
          [...column]
            .sort((a, b) => {
              if (a && b) {
                return a.index - b.index;
              }
            })
            .filter((el) => el !== null)
        );
        setActiveColNo(colNo);
      }
    }
  };

  return (
    <TableCell align="center">
      <Button
        variant="contained"
        sx={
          colNo == 1 || colNo == 2 || colNo == 4
            ? {
                backgroundColor: "#e5de16",
                ":hover": {
                  backgroundColor: "#ffc700",
                },
              }
            : {
                bgcolor: "red",
                ":hover": {
                  backgroundColor: "#d10000",
                },
              }
        }
        onClick={() => handleClick(col)}
        disabled={Array.isArray(col) ? false : true}
      >
        {colNo}
      </Button>
    </TableCell>
  );
}
