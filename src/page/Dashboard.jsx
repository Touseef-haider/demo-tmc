import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChooseRacesBtn from "../components/ChooseRacesBtn";
import SubNavigation from "../components/SubNavigation";
import ArrowNavigation from "../components/ArrowNavigation";
import DashboardTableHead from "../components/DashboardTableHead";
import DashboardTableBody from "../components/DashboardTableBody";
import DateInput from "../components/DateInput";
import TrackMyTheoryPanel from "../components/TrackMyTheoryPanel";
import SitesNavigation from "../components/SitesNavigation";
import CountDownTimer from "../components/CountDownTimer";
import useComponentVisible from "../hooks/componentVisible";
import "./style.css";

export default function Dashboard() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const [atr1, setAtr1] = useState([]);
  const [atr2, setAtr2] = useState([]);
  const [atr3, setAtr3] = useState([]);
  const [rPost1, setRPost1] = useState([]);
  const [rPost2, setRPost2] = useState([]);
  const [atrTime, setAtrTime] = useState("");
  const [rPostTime, setRPostTime] = useState("");
  const [meeting, setMeeting] = useState("");
  const [activeCol, setActiveCol] = useState([]);
  const [activeColNo, setActiveColNo] = useState(1);
  const { date: paramDate, index: sNo } = useParams();
  const [date, setDate] = useState(paramDate);
  const [index, setIndex] = useState(parseInt(sNo));
  const [error, setError] = useState();
  const [atrLink, setAtrLink] = useState();
  const [rPostLink, setRPostLink] = useState();
  const [sLifeLink, setSLifeLink] = useState();
  const [selectedHorses, setSelectedHorses] = useState([]);
  const [liveMarket, setliveMarket] = useState([]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [theory, setTheory] = useState([]);
  const [meetingRaces, setMeetingRaces] = useState([]);
  const [meetingNames, setMeetingNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // For Races
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/meeting/${date}/${meeting}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const json = await response.json();
      setMeetingRaces(json.races);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/meeting/${date}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      setMeetingNames(await res.json());
    };
    fetchData();
  }, [meeting]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/race/${date}/${index}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const json = await response.json();
      setError(null);
      if (json.status == "ok") {
        setSelectedFilterIndex(0);
        setActiveColNo(1);
        setAtr1(json.race.ATR1);
        setAtr2(json.race.ATR2);
        setAtr3(json.race.ATR3);
        setRPost1(json.race.RPOST1);
        setRPost2(json.race.RPOST2);
        setAtrTime(json.race.ATR);
        setMeeting(json.race.meeting);
        setRPostTime(json.race.RPOST);
        setAtrLink(json.race.ATRLink);
        setRPostLink(json.race.RPOSTLink);
        setSLifeLink(json.race.SLIFELink);
        setActiveCol(json.race.ATR1);
        setSelectedHorses([
          ...json.race.atrSelectedHorses,
          ...json.race.timeformSelectedHorses,
          ...json.race.sLifeSelectedHorses,
        ]);
        setliveMarket(
          json.race.liveMarket
            ? json.race.liveMarket.sort(
                (a, b) =>
                  a[1].split("/")[0] / a[1].split("/")[1] -
                  b[1].split("/")[0] / b[1].split("/")[1]
              )
            : []
        );
        setTheory(json.race.theory);
      } else if (json.status == "error") {
        setError("Not Found");
      }
    };
    fetchData();
  }, [index, date]);
  useEffect(() => {
    switch (selectedFilterIndex) {
      case 0:
        setliveMarket(
          [...liveMarket].sort(
            (a, b) =>
              a[1].split("/")[0] / a[1].split("/")[1] -
              b[1].split("/")[0] / b[1].split("/")[1]
          )
        );
        break;
      case 1:
        setliveMarket(
          [...liveMarket].sort(
            (a, b) => a[0].split(" ")[0] - b[0].split(" ")[0]
          )
        );
        break;
      case 2:
        setliveMarket(
          [...liveMarket].sort((a, b) =>
            a[0].split(" ")[1].localeCompare(b[0].split(" ")[1])
          )
        );
        break;
    }
  }, [selectedFilterIndex]);

  return (
    <div
      style={{
        height: "100vh",
        marginTop: "20px",
        marginLeft: "20px",
      }}
    >
      <div>
        <div
          onClick={() => setIsComponentVisible(!isComponentVisible)}
          className="side-panel"
        ></div>
        {!error ? (
          <div className="main-section">
            {isComponentVisible && (
              <div ref={ref} className="show-when-side-panel-hovered">
                <center>
                  <ChooseRacesBtn date={date} setIndex={setIndex} />
                </center>
                <center>
                  <ArrowNavigation
                    index={parseInt(index)}
                    meeting={meeting}
                    setMeeting={setMeeting}
                    setIndex={setIndex}
                    meetingNames={meetingNames}
                  />
                </center>

                <center>
                  <SubNavigation
                    meeting={meeting}
                    meetingRaces={meetingRaces}
                  />
                </center>
                <center>
                  <SitesNavigation
                    atrLink={atrLink}
                    rPostLink={rPostLink}
                    sLifeLink={sLifeLink}
                  />
                </center>
              </div>
            )}
            <div>
              <div className="main-section stick">
                <DateInput setIndex={setIndex} setDate={setDate} />
                <Typography variant="h4" gutterBottom align="center">
                  {new Date(date).toDateString() + " | " + meeting + " | "}
                  <span
                    style={{
                      backgroundColor: "#ee9154",
                      color: "white",
                    }}
                  >
                    {rPostTime}
                  </span>
                  {" | "}
                  <CountDownTimer date={date} time={atrTime} />
                </Typography>
              </div>
              <div className="main-section" style={{ marginTop: "50px" }}>
                <TrackMyTheoryPanel noOfRows={atr1?.length} theory={theory} />
                <TableContainer
                  // sx={{
                  //   maxHeight: innerHeight - 80,
                  // }}
                  style={{ zIndex: "-1", marginTop: "20px" }}
                  component={Paper}
                >
                  <Table
                    stickyHeader
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                  >
                    <DashboardTableHead
                      atr1={atr1}
                      atr2={atr2}
                      atr3={atr3}
                      rPost1={rPost1}
                      rPost2={rPost2}
                      setActiveCol={setActiveCol}
                      activeColNo={activeColNo}
                      setActiveColNo={setActiveColNo}
                      liveMarket={liveMarket}
                      selectedFilterIndex={selectedFilterIndex}
                      setSelectedFilterIndex={setSelectedFilterIndex}
                    />
                    <DashboardTableBody
                      atr1={atr1}
                      atr2={atr2}
                      atr3={atr3}
                      rPost1={rPost1}
                      rPost2={rPost2}
                      activeCol={activeCol}
                      activeColNo={activeColNo}
                      setActiveColNo={setActiveColNo}
                      selectedHorses={selectedHorses}
                      liveMarket={liveMarket}
                      setliveMarket={setliveMarket}
                      selectedFilterIndex={selectedFilterIndex}
                      setSelectedFilterIndex={setSelectedFilterIndex}
                    />
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <DateInput setIndex={setIndex} setDate={setDate} />
            <Typography variant="h1" color="error">
              Not Found
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
