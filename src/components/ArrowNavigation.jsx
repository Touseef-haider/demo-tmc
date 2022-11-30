import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Up from "@mui/icons-material/ArrowCircleUp";
import Down from "@mui/icons-material/ArrowCircleDown";
import { NavLink, useLocation } from "react-router-dom";
import "../page/style.css";

export default function ArrowNavigation({
  index,
  setIndex,
  meeting,
  meetingNames,
  setMeeting,
}) {
  const location = useLocation();

  const link = location?.pathname;
  const indexChanger = (operation) => {
    if (operation == "+") {
      return parseInt(parseInt(link.split("/")[3]) + 1);
    } else if (operation == "-") {
      return parseInt(parseInt(link.split("/")[3]) - 1);
    }
  };

  const linkModifier = (operation) => {
    if (operation == "+") {
      return (
        link.slice(0, link.lastIndexOf("/") + 1) +
        (parseInt(link.split("/")[3]) + 1)
      );
    } else if (operation == "-") {
      return (
        link.slice(0, link.lastIndexOf("/") + 1) +
        (parseInt(link.split("/")[3]) - 1)
      );
    }
  };

  const getNextUpLink = () => {
    const currentMeeting = meetingNames?.meetingNames?.findIndex(
      (m) => m === meeting
    );
    const nextIndex =
      currentMeeting <= meetingNames?.meetingNames?.length
        ? currentMeeting - 1
        : currentMeeting;

    const upLink =
      meetingNames?.meetingRaces[nextIndex] &&
      meetingNames?.meetingRaces[nextIndex][0]?.link;

    return upLink ? upLink : link;
  };
  const getNextDownLink = () => {
    const currentMeeting = meetingNames?.meetingNames?.findIndex(
      (m) => m === meeting
    );
    const nextIndex = currentMeeting >= 0 ? currentMeeting + 1 : currentMeeting;

    const downLink =
      meetingNames?.meetingRaces[nextIndex] &&
      meetingNames?.meetingRaces[nextIndex][0]?.link;

    return downLink ? downLink : link;
  };

  return (
    <div style={{ marginTop: "30px" }} className="square">
      <NavLink
        to={getNextUpLink()}
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#fff",
        })}
        className="up"
        onClick={() => {
          const currentMeeting = meetingNames?.meetingNames?.findIndex(
            (m) => m === meeting
          );

          const nextIndex = meetingNames?.meetingNames?.length
            ? currentMeeting - 1
            : currentMeeting;

          if (nextIndex >= 0) {
            setMeeting(meetingNames?.meetingNames[nextIndex]);
          }
        }}
      >
        <Up sx={{ fontSize: "40px" }} />
      </NavLink>
      <br />

      <NavLink
        to={linkModifier("-")}
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#fff",
        })}
        className="left"
        onClick={() => setIndex(parseInt(indexChanger("-")))}
      >
        <ArrowCircleLeftIcon sx={{ fontSize: "40px" }} />
      </NavLink>
      <NavLink
        to={linkModifier("+")}
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#fff",
        })}
        className="right"
        onClick={() => setIndex(parseInt(indexChanger("+")))}
      >
        <ArrowCircleRightIcon sx={{ fontSize: "40px" }} />
      </NavLink>
      <br />
      <NavLink
        to={getNextDownLink()}
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#fff",
        })}
        className="down"
        onClick={() => {
          const currentMeeting = meetingNames?.meetingNames?.findIndex(
            (m) => m === meeting
          );

          const nextIndex =
            currentMeeting > 0 ? currentMeeting + 1 : currentMeeting;

          setMeeting(meetingNames?.meetingName[nextIndex]);
        }}
      >
        <Down sx={{ fontSize: "40px" }} />
      </NavLink>
      <span className="circle">{index}</span>
    </div>
  );
}
