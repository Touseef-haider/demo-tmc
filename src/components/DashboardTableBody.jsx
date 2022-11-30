import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import TableBodyCell from "./TableBodyCell";
import TableBodyHorseNameCell from "./TableBodyHorseNameCell";

export default function DashboardTableBody(props) {
  const {
    atr1,
    atr2,
    atr3,
    rPost1,
    rPost2,
    activeCol,
    activeColNo,
    selectedHorses,
    liveMarket,
  } = props;
  const cols = [atr1, atr2, rPost1, atr3, rPost2];
  const rows = [];
  const len =
    atr1.length >= selectedHorses.length ? atr1.length : selectedHorses.length;
  for (let index = 0; index < len; index++) {
    rows.push(
      <TableRow style={{ height: "80px" }} key={index}>
        <TableBodyHorseNameCell activeCol={activeCol} index={index} />
        {cols.map((col, ind) => (
          <TableBodyCell
            key={ind}
            colNo={ind + 1}
            col={col}
            index={index}
            activeColNo={activeColNo}
          />
        ))}
        <TableCell align="left">
          {liveMarket[index] && (
            <>
              {liveMarket[index][0]}
              <span style={{ color: "red" }}>({liveMarket[index][1]})</span>
            </>
          )}
        </TableCell>
        <TableCell
          align="left"
          sx={
            selectedHorses[index] &&
            (selectedHorses[index].cat == "timeformFromSLife"
              ? {
                  textAlign: "center",
                }
              : {})
          }
        >
          {selectedHorses[index] &&
            (selectedHorses[index].cat == "timeformFromSLife" ? (
              <>{selectedHorses[index].name}</>
            ) : (
              <div>
                <b
                  style={{
                    fontSize: 20,
                    color: "white",
                    borderRadius: "16px",
                    padding: 5,
                    backgroundColor: "red",
                  }}
                >
                  {selectedHorses[index].name.split(" (")[1].replace(")", "")}
                </b>
                <span>{selectedHorses[index].name.split(" (")[0]}</span>
              </div>
            ))}
        </TableCell>
      </TableRow>
    );
  }
  return <TableBody>{rows}</TableBody>;
}
