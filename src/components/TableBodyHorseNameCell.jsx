import { TableCell } from "@mui/material";

export default function TableBodyHorseNameCell({ activeCol, index }) {
  let no;
  let name;
  if (activeCol) {
    if (activeCol[index]) {
      const hName = activeCol[index].horseName;
      const splitInd = hName.indexOf(" ");
      no = hName.slice(0, splitInd);
      name = hName.slice(splitInd);
    }
  }
  return (
    <TableCell
      style={{ width: "100%", textOverflow: "ellipsis", overflow: "hidden" }}
      align="left"
    >
      {name && (
        <>
          <b
            style={{
              fontSize: 20,
              color: "white",
              borderRadius: "16px",
              padding: 5,
              backgroundColor: "red",
            }}
          >
            {no}
          </b>
          <span>{name}</span>
        </>
      )}
    </TableCell>
  );
}
