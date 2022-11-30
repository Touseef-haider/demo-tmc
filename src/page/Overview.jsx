import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Overview() {
  const [races, setRaces] = useState([]);
  const [date, setDate] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/all-races-data`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const json = await response.json();
      console.log(json);
      setRaces(json.racesData);
      setDate(json.date);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Overview - {date}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ATR</TableCell>
              <TableCell align="center">R POST</TableCell>
              <TableCell align="center">S LIFE</TableCell>
              <TableCell align="center">#</TableCell>
              <TableCell align="center">ATR 1</TableCell>
              <TableCell align="center">ATR 2</TableCell>
              <TableCell align="center">R POST 1</TableCell>
              <TableCell align="center">ATR 3</TableCell>
              <TableCell align="center">R POST 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(races) &&
              races &&
              races?.map((race, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {race?.ATR}
                  </TableCell>
                  <TableCell align="center">{race?.RPOST}</TableCell>
                  <TableCell align="center">{race?.SLIFE}</TableCell>
                  <TableCell component="th" scope="row">
                    <Link
                      to={
                        "/race/" + date.replaceAll("/", "-") + "/" + race.index
                      }
                    >
                      {race.index}
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    {race?.ATR1
                      ? race?.ATR1 == "?"
                        ? "?"
                        : race?.ATR1.join(", ")
                      : ""}
                  </TableCell>
                  <TableCell align="center">
                    {race?.ATR2
                      ? race?.ATR2 == "?"
                        ? "?"
                        : race?.ATR2.join(", ")
                      : ""}
                  </TableCell>
                  <TableCell align="center">
                    {race?.RPOST1 && race?.RPOST1.join(", ")}
                  </TableCell>
                  <TableCell align="center">
                    {race?.ATR3 && race?.ATR3.join(", ")}
                  </TableCell>
                  <TableCell align="center">
                    {race?.RPOST2
                      ? race?.RPOST2 == "?"
                        ? "?"
                        : race?.RPOST2.join(", ")
                      : ""}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
