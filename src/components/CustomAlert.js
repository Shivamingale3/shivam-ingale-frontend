import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomAlert = ({ message, status, onClose }) => {
  const [show, setShow] = useState(true);

  // Automatically hide the alert after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onClose]);

  if (!show) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        backgroundColor: "black",
        border: "1px solid",
        borderColor: status === "success" ? "green" : "red",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        maxWidth: "300px",
      }}
    >
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        {message}
      </Typography>
      <IconButton
        onClick={() => {
          setShow(false);
          onClose();
        }}
        sx={{ color: "#fff", padding: "4px" }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default CustomAlert;
