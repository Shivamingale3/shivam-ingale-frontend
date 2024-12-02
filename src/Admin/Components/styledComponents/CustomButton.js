import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";

const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "black",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-in-out",
    ":hover": {
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        transform: "translateY(-5px)",
    },
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

export default function CustomButton({ label, handleClick, loading }) {
    return (
        <ColorButton variant="contained" onClick={handleClick}>
            {loading ? <CircularProgress /> : label}
        </ColorButton>
    );
}
