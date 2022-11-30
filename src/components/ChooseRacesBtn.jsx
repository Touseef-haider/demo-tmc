import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import ChooseRacesPanel from "./ChooseRacesPanel";

export default function ChooseRacesBtn({ date, setIndex }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button sx={{ m: 2 }} variant="contained" onClick={handleClick}>
        Choose Races
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <ChooseRacesPanel date={date} setIndex={setIndex} />
      </Popover>
    </div>
  );
}
