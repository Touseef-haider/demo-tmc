import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function SubNavigation({ meeting, meetingRaces }) {
  return (
    <Box style={{ marginTop: "20px" }}>
      <Typography variant="button" display="block" gutterBottom>
        {meeting}
      </Typography>
      <List>
        {meetingRaces &&
          meetingRaces?.map((race, index) => (
            <ListItem disablePadding centerRipple key={index}>
              <ListItemButton
                style={{ display: "flex", justifyContent: "center" }}
              >
                <NavLink
                  to={race.link}
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                    background: isActive ? "#ee9154" : "#f0f0f0",
                  })}
                  onClick={() => setIndex(parseInt(race.index))}
                >
                  <ListItemText primary={race.time} />
                </NavLink>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
}
