import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function ChooseRacesPanel({ date, setIndex }) {
    const [meetingNames, setMeetingNames] = useState([]);
    const [meetingsRaces, setMeetingsRaces] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/meeting/${date}`,
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }
            );
            const json = await response.json();
            console.log(json);
            setMeetingNames(json.meetingNames);
            setMeetingsRaces(json.meetingRaces);
        };
        fetchData();
    }, []);
    return (
        <TableContainer component={Paper}>
            <Table sx={{}}>
                {/* <TableHead>
                    <TableRow>
                        <TableCell align="center">{meetingNames[0]}</TableCell>
                        <TableCell align="center">1</TableCell>
                        <TableCell align="center">index</TableCell>
                        <TableCell align="center">2</TableCell>
                        <TableCell align="center">3</TableCell>
                        <TableCell align="center">4</TableCell>
                        <TableCell align="center">5</TableCell>
                    </TableRow>
                </TableHead> */}
                <TableBody>
                    {meetingNames.map((mName, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell align="center">{mName}</TableCell>
                            {meetingsRaces[index].map((race, i) => (
                                <TableCell key={i} align="center" onClick={() => setIndex(parseInt(race.index))}>
                                    <NavLink
                                        to={race.link}
                                        style={({ isActive }) => ({
                                            color: isActive ? '#fff' : '#545e6f',
                                            background: isActive ? '#ee9154' : '#f0f0f0',
                                          })}
                                        // onClick={() => setRPostTime(race.time)}
                                    >
                                        {race.time}
                                    </NavLink>
                                        {/* {race.time} */}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
