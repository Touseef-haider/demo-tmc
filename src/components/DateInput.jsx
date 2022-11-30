import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DateInput({ setIndex, setDate }) {
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  const handleAccept = (newValue) => {
    console.log("OK Button is clicked", newValue.$d);
    const date = new Date(newValue.$d)
      .toLocaleDateString()
      .replaceAll("/", "-");
    setDate(date);
    setIndex(1);
    navigate(`/race/${date}/1`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        label="Enter date"
        value={value}
        onAccept={(newValue) => handleAccept(newValue)}
        onChange={(newValue) => {
          console.log(newValue);
          setValue(newValue);
          handleAccept(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
