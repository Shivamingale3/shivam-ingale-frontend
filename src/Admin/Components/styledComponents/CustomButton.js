import { Button } from "@mui/material";
import styled from "styled-components";

const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "black",
    border: "1px solid white",
    '&.MuiButton-contained': {
        backgroundColor: "black",
        color: "white",
        border: "1px solid white",
    },
    '&.MuiButton-contained:hover': {
        backgroundColor: "white",
        color: "black",
    },
}));

export default function CustomButton({ label, handleClick }) {
    return (
        <ColorButton variant="contained" onClick={handleClick}>
            {label}
        </ColorButton>
    );
}
