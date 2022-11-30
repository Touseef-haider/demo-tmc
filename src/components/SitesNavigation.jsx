import { ButtonGroup, Button } from "@mui/material";

export default function SitesNavigation({ atrLink, rPostLink, sLifeLink }) {
  const links = [
    { text: "A", url: atrLink, color: "#e5de16", hoverColor: "#ffc700" },
    { text: "R", url: rPostLink, color: "red", hoverColor: "#d10000" },
    { text: "S", url: sLifeLink, color: "blue", hoverColor: "#0c519b" },
  ];
  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
      }}
    >
      <ButtonGroup variant="contained">
        {links.map((link, index) => (
          <Button
            key={index}
            href={link.url}
            target="_blank"
            sx={{
              backgroundColor: link.color,
              "&:hover": {
                backgroundColor: link.hoverColor,
              },
            }}
          >
            {link.text}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
