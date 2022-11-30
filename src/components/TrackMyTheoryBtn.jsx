import { Button } from "@mui/material";

export default function TrackMyTheoryBtn({ showTmtPanel, setShowTmtPanel }) {
    const handleClick = () => {
        setShowTmtPanel(!showTmtPanel);
    };
    return (
        <Button
            color="secondary"
            variant="contained"
            onClick={() => handleClick()}
        >
            TrackMyTheory
        </Button>
    );
}
