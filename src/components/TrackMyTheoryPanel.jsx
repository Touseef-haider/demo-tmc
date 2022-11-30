import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const colors = [
  "#ff0000",
  "#bf8f00",
  "#7030a0",
  "#00b0f0",
  "#ffff00",
  "#000000",
];

export default function TrackMyTheoryPanel({ noOfRows = [], theory }) {
  const rows = [];
  if (noOfRows > 0) {
    for (let i = 0; i < noOfRows; i++) {
      rows.push(
        <TableRow style={{ height: "80px" }} sx={{ minWidth: "40px" }}>
          {[1, 2, 3, 4, 5, 6].map((el) => (
            <>
              {el == 5 && i == 0 && theory?.includes("Yellow1") ? (
                <TableCell
                  style={{
                    backgroundColor: colors[i],
                    textAlign: "center",
                    color: colors[i] === "#000000" && "white",
                  }}
                >
                  1
                </TableCell>
              ) : (
                <TableCell></TableCell>
              )}
            </>
          ))}
        </TableRow>
      );
    }
  }
  return (
    <TableContainer
      style={{
        maxWidth: "300px",
        width: "100%",
        marginTop: "57px",
      }}
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            {colors.map((el) => (
              <TableCell
                sx={{ minWidth: "40px", backgroundColor: el }}
              ></TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
