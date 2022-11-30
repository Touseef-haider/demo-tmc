import { TableCell, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import LiveMarketHeadCell from "./LiveMarketHeadCell";
import TableHeadCell from "./TableHeadCell";

export default function DashboardTableHead(props) {
  const {
    atr1,
    atr2,
    atr3,
    rPost1,
    rPost2,
    setActiveCol,
    setActiveColNo,
    selectedFilterIndex,
    setSelectedFilterIndex,
    liveMarket,
  } = props;

  const cols = [atr1, atr2, rPost1, atr3, rPost2];
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">Horse</TableCell>
        {cols.map((col, index) => {
          return (
            <TableHeadCell
              key={index}
              col={col}
              colNo={index + 1}
              setActiveCol={setActiveCol}
              setActiveColNo={setActiveColNo}
            />
          );
        })}
        <TableCell align="center">
          <LiveMarketHeadCell
            setSelectedFilterIndex={setSelectedFilterIndex}
            selectedFilterIndex={selectedFilterIndex}
            liveMarket={liveMarket}
          />
        </TableCell>
        <TableCell align="center">
          <Box
            sx={{
              backgroundColor: "black",
              color: "white",
              minHeight: "36px",
              minWidth: "90px",
              lineHeight: "36px",
              borderRadius: "4px",
            }}
          >
            5 TIPS
          </Box>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
